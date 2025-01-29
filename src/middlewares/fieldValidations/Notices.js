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
    return this.CheckIntegers(datesFieldsData);
  }

  CheckIntegers(integersFieldData) {
    if (!Number.isInteger(integersFieldData.timer_id)) {
      return 'timer_id must be a integer';
    }
    return this.CheckUUID(integersFieldData);
  }

  CheckUUID(UUIDFieldData) {
    if (!uuidCheck.test(UUIDFieldData.sale_id)) {
      return 'sale_id must be a uuid string';
    }
    return null;
  }
}

export default new NoticesValidations();
