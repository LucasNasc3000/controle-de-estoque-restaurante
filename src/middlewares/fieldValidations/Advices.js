import {
  dateAndHourErrorMsg, uuidCheck,
} from './DataRegex';

class AdvicesValidations {
  constructor() {
    // eslint-disable-next-line no-useless-escape
    this.dateRegex = /d{0,9}\-\d{0,9}\-\d{0,9}/;
    this.hourRegex = /(0?[0-9]|1[0-9]|2[0-3]):[0-9]/;
  }

  CheckDatesAndHour(datesFieldsData) {
    if (datesFieldsData.date) {
      if (!this.dateRegex.test(datesFieldsData.date)) {
        return dateAndHourErrorMsg;
      }
    }

    if (datesFieldsData.hour) {
      if (!this.hourRegex.test(datesFieldsData.hour)) {
        return dateAndHourErrorMsg;
      }
    }
    return this.CheckUUID(datesFieldsData);
  }

  CheckUUID(UUIDFieldData) {
    if (!uuidCheck.test(UUIDFieldData.employee_id)) {
      return 'employee_id must be a uuid string';
    }
    return this.CheckStringFields(UUIDFieldData);
  }

  CheckStringFields(StringFieldsData) {
    if (typeof StringFieldsData.subject !== 'string') {
      return 'subject must be a string';
    }

    if (typeof StringFieldsData.email_body !== 'string') {
      return 'email_body must be a string';
    }
    return null;
  }
}

export default new AdvicesValidations();
