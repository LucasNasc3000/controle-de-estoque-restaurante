"use strict";Object.defineProperty(exports, "__esModule", {value: true});


<<<<<<< HEAD



=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
var _DataRegex = require('./DataRegex');

class SalesValidations {
  CheckPersonalAndSalesData(PersonalAndSalesData) {
<<<<<<< HEAD
=======
    const phoneNumberCheck = /^([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    const alphabetCheck = /^[a-zA-Z]+$/;

>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
    if (PersonalAndSalesData.phone_number) {
      if (!_DataRegex.phoneNumberRegex.test(PersonalAndSalesData.phone_number)) {
        return 'phone_number must be a phone number string';
      }
    }

    if (PersonalAndSalesData.client_name) {
<<<<<<< HEAD
      if (!_DataRegex.alphabetRegex.test(PersonalAndSalesData.client_name)) {
=======
      if (!alphabetCheck.test(PersonalAndSalesData.client_name)) {
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
        return 'client_name must be a alphabet string';
      }
    }

    if (PersonalAndSalesData.products) {
      if (typeof PersonalAndSalesData.products !== 'string') {
        return 'products must be a string';
      }
    }

    if (PersonalAndSalesData.client_birthday) {
      if (typeof PersonalAndSalesData.client_birthday !== 'string') {
        return 'client btd must be a short date string';
      }
    }
    return this.CheckDatesAndHour(PersonalAndSalesData);
  }

  CheckDatesAndHour(DatesFieldsData) {
    if (DatesFieldsData.date) {
      if (!_DataRegex.dateRegex.test(DatesFieldsData.date)) {
        return _DataRegex.dateAndHourErrorMsg;
      }
    }

    if (DatesFieldsData.hour) {
      if (!_DataRegex.hourRegex.test(DatesFieldsData.hour)) {
        return _DataRegex.dateAndHourErrorMsg;
      }
    }
    return null;
  }
}

exports. default = new SalesValidations();
