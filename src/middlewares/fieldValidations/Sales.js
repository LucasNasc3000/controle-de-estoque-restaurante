import {
  dateAndHourErrorMsg,
  dateRegex, hourRegex,
} from './DataRegex';

class SalesValidations {
  CheckPersonalAndSalesData(PersonalAndSalesData) {
    const phoneNumberCheck = /^([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    const alphabetCheck = /^[a-zA-Z]+$/;

    if (PersonalAndSalesData.phone_number) {
      if (!phoneNumberCheck.test(PersonalAndSalesData.phone_number)) {
        return 'phone_number must be a phone number string';
      }
    }

    if (PersonalAndSalesData.client_name) {
      if (!alphabetCheck.test(PersonalAndSalesData.client_name)) {
        return 'client_name must be a letters string';
      }
    }

    if (PersonalAndSalesData.products) {
      if (typeof PersonalAndSalesData.products !== 'string') {
        return 'products must be a string';
      }

      if (!alphabetCheck.test(PersonalAndSalesData.products)) {
        return 'products must be a string';
      }
    }

    if (PersonalAndSalesData.address) {
      if (!alphabetCheck.test(PersonalAndSalesData.address)) {
        return 'address must be a string';
      }
    }
    return this.CheckDatesAndHour(PersonalAndSalesData);
  }

  CheckDatesAndHour(DatesFieldsData) {
    if (DatesFieldsData.date) {
      if (!dateRegex.test(DatesFieldsData.date)) {
        return dateAndHourErrorMsg;
      }
    }

    if (DatesFieldsData.hour) {
      if (!hourRegex.test(DatesFieldsData.hour)) {
        return dateAndHourErrorMsg;
      }
    }
    return null;
  }
}

export default new SalesValidations();
