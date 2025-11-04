"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
var _emailsErrors = require('../errors/emailsErrors');
var _EmployeeSearchCredentials = require('../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class BirthdaysNotifications {
  async AddressesAllowed() {
    const employeeSearch = await _EmployeeSearchCredentials2.default.SearchByAddressAllowed();
    const addressesAllowed = [];
    let correctPermission = false;

    for (let i = 0; i < employeeSearch.length; i++) {
      if (employeeSearch[i].dataValues.permission === process.env.SALES_PERMISSION
          || employeeSearch[i].dataValues.permission === process.env.SO_PERMISSION
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

  async SendEmail(emailSubject, emailBody) {
    const destinataryVerify = await this.AddressesAllowed();

    if (destinataryVerify === null) return null;

    if (destinataryVerify.length === 1) {
      const msg = {
        to: destinataryVerify[0],
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
          throw new (0, _emailsErrors.EmailErrors)(error);
        });
    }

    if (destinataryVerify.length > 1) {
      for (let i = 0; i < destinataryVerify.length; i++) {
        const msg = {
          to: destinataryVerify[i],
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
            throw new (0, _emailsErrors.EmailErrors)(error);
          });
      }
    }
  }
}

exports. default = new BirthdaysNotifications();
