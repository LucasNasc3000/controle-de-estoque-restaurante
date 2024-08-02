import EmployeeSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class Notifications {
  async AddressesAllowed() {
    const employeeSearch = await EmployeeSearchCredentials.SearchByAddressAllowed();

    if (employeeSearch) return employeeSearch[0].dataValues.address_allowed;

    return null;
  }

  async RateIsNear(inputData) {
    const destinatary = this.AddressesAllowed();

    if (destinatary === null) return null;

    const msg = {
      to: destinatary,
      from: process.env.FROM_EMAIL,
      subject: 'Insumo chegando à quantidade limite',
      text: `Atenção:\nO insumo ${inputData[2]} está perto da quantidade limite de ${inputData[1]}.\n
      Quantidade atual: ${inputData[0]}`,
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
