/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import EmployeeSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';

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

  async RateIsNear(inputData) {
    const destinatary = await this.AddressesAllowed();
    let email = {};

    if (destinatary === null) return null;

    if (destinatary.length === 1) {
      email = {
        to: destinatary[0],
        from: process.env.FROM_EMAIL,
        subject: 'Insumo chegando à quantidade limite',
        text: `Atenção:\nO insumo ${inputData[2]} está perto da quantidade
        limite de ${inputData[1]}.\nQuantidade atual: ${inputData[0]}`,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };

      return sgMail
        .send(email)
        .then((response) => {
          console.log(response[0].statusCode);
          console.log(response[0].headers);
          return 'Notificacao enviada';
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (destinatary.length > 1) {
      for (let i = 0; i < destinatary.length; i++) {
        email = {
          to: destinatary[i],
          from: process.env.FROM_EMAIL,
          subject: 'Insumo chegando à quantidade limite',
          text: `Atenção:\nO insumo ${inputData[2]} está perto da quantidade
          limite de ${inputData[1]}.\nQuantidade atual: ${inputData[0]}`,
          // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };

        sgMail
          .send(email)
          .then((response) => {
            console.log(response[0].statusCode);
            console.log(response[0].headers);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  async LimitReached(inputData) {
    const destinatary = this.AddressesAllowed();
    if (destinatary === null) return null;

    const msg = {
      to: destinatary,
      from: process.env.FROM_EMAIL,
      subject: 'Insumo chegou à quantidade limite',
      text: `Atenção:\nO insumo ${inputData[2]} chegou à quantidade limite de ${inputData[1]}.`,
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
        console.error(error);
      });
  }
}

export default new Notifications();
