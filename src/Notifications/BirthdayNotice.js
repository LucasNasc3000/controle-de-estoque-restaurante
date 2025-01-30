/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import { EmailErrors } from '../errors/emailsErrors';
import EmployeeSearchCredentials from '../repositories/Employee/EmployeeSearchCredentials';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class BirthdayNotice {
  constructor() {
    this.idCounter = 1;
  }

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

  async DataFilter() {
    const destinatary = await this.AddressesAllowed();
    // const subjects = ['Aniversário de um ou mais clientes próximo da data'];
    // const emailBodies = [];
    // const btNotices = [];
    // const btDays = [];
    // const employees = [];

    if (destinatary === null) return 'no destinataries';

    const timer = setTimeout(() => {
      console.log('agora vai');
    }, 20000);

    this.idCounter++;

    const inArray = [this.idCounter, timer];
    Timers.push(inArray);

    // Executa a cada uma semana
    // setInterval(async () => {
    //   const getSales = await SalesSearchSalesData.ShowBtNotices();
    //   console.log(getSales);
    // }, 604800016.56);
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

export default new BirthdayNotice();
