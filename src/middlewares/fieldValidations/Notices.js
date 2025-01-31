import {
  dateAndHourErrorMsg, uuidCheck,
} from './DataRegex';

class NoticesValidations {
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
    if (!uuidCheck.test(UUIDFieldData.sale_id)) {
      return 'sale_id must be a uuid string';
    }

    if (!uuidCheck.test(UUIDFieldData.employee_id)) {
      return 'employee_id must be a uuid string';
    }
    return null;
  }
}

export default new NoticesValidations();
