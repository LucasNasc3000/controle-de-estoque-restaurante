/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import { EmailErrors } from '../errors/emailsErrors';
import EmployeeSearchCredentials from '../repositories/Employee/EmployeeSearchCredentials';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class Notifications {
  async AddressesAllowed() {
    const employeeSearch = await EmployeeSearchCredentials.SearchByAddressAllowed();
    const addressesAllowed = [];
    let correctPermission = false;

    for (let i = 0; i < employeeSearch.length; i++) {
      if (employeeSearch[i].dataValues.permission === process.env.INPUTS_OUTPUTS_PERMISSION
          || employeeSearch[i].dataValues.permission === process.env.SOI_PERMISSION
          || employeeSearch[i].dataValues.permission === process.env.ADMIN_PERMISSION
      ) {
        addressesAllowed.push(employeeSearch[i].dataValues.email);
        correctPermission = true;
      }
    }

    if (employeeSearch && correctPermission === true) {
      return addressesAllowed;
    }

    return null;
  }

  async DataFilter(inputData, emailSubject, logError = '') {
    const destinatary = await this.AddressesAllowed();
    const subjects = ['Insumo chegando à quantidade limite', 'Insumo chegou à quantidade limite', 'Erro ao registrar log'];
    const emailBodies = [
      `Atenção:\nO insumo ${inputData[2]} está perto da quantidade limite de ${inputData[1]}.\nQuantidade até antes da última saída: ${inputData[0]}`,
      `Atenção:\nO insumo ${inputData[2]} chegou à quantidade limite de ${inputData[1]}.`,
      `Ocorreu o seguinte erro ao registrar um log: \n${logError}`,
    ];

    if (destinatary === null) return null;

    // eslint-disable-next-line default-case
    switch (emailSubject) {
      case 'rateIsNear':
        this.SendEmail(subjects[0], emailBodies[0], destinatary);
        break;

      case 'limitReached':
        this.SendEmail(subjects[1], emailBodies[1], destinatary);
        break;

      case 'logError':
        this.SendEmail(subjects[2], emailBodies[2], destinatary);
        break;
    }
  }

  async SendEmail(emailSubject, emailBody, destinatary) {
    const destinataryVerify = await this.AddressesAllowed();

    if (destinataryVerify === null) return null;

    if (destinatary.length === 1) {
      const msg = {
        to: destinatary[0],
        from: process.env.FROM_EMAIL,
        subject: emailSubject,
        text: emailBody,
      // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };

      return sgMail
        .send(msg)
        .then((response) => {
          console.log(response[0].statusCode);
          console.log(response[0].headers);
          return 'Notificacao enviada';
        })
        .catch((error) => {
          throw new EmailErrors(error);
        });
    }

    if (destinatary.length > 1) {
      for (let i = 0; i < destinatary.length; i++) {
        const msg = {
          to: destinatary[i],
          from: process.env.FROM_EMAIL,
          subject: emailSubject,
          text: emailBody,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };

        sgMail
          .send(msg)
          .then((response) => {
            console.log(response[0].statusCode);
            console.log(response[0].headers);
            return 'Notificacao enviada';
          })
          .catch((error) => {
            throw new EmailErrors(error);
          });
      }
    }
  }
}

export default new Notifications();
