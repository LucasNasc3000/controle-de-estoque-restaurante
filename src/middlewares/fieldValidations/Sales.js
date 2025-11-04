import {
  alphabetRegex,
  dateAndHourErrorMsg,
  dateRegex,
  hourRegex,
  phoneNumberRegex,
} from './DataRegex';

class SalesValidations {
  CheckPersonalAndSalesData(PersonalAndSalesData) {
    if (PersonalAndSalesData.phone_number) {
      if (!phoneNumberRegex.test(PersonalAndSalesData.phone_number)) {
        return 'phone_number must be a phone number string';
      }
    }

    if (PersonalAndSalesData.client_name) {
      if (!alphabetRegex.test(PersonalAndSalesData.client_name)) {
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
