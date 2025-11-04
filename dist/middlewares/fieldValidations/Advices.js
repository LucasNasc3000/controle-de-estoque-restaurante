"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _DataRegex = require('./DataRegex');

class AdvicesValidations {
  constructor() {
    // eslint-disable-next-line no-useless-escape
    this.dateRegex = /d{0,9}\-\d{0,9}\-\d{0,9}/;
    this.hourRegex = /(0?[0-9]|1[0-9]|2[0-3]):[0-9]/;
  }

  CheckDatesAndHour(datesFieldsData) {
    if (datesFieldsData.date) {
      if (!this.dateRegex.test(datesFieldsData.date)) {
        return _DataRegex.dateAndHourErrorMsg;
      }
    }

    if (datesFieldsData.hour) {
      if (!this.hourRegex.test(datesFieldsData.hour)) {
        return _DataRegex.dateAndHourErrorMsg;
      }
    }
    return this.CheckUUID(datesFieldsData);
  }

  CheckUUID(UUIDFieldData) {
    if (!_DataRegex.uuidCheck.test(UUIDFieldData.employee_id)) {
      return 'employee_id must be a uuid string';
    }
    return this.CheckStringFields(UUIDFieldData);
  }

  CheckStringFields(StringFieldsData) {
    if (StringFieldsData.subject) {
      if (typeof StringFieldsData.subject !== 'string') {
        return 'subject must be a string';
      }

      if (StringFieldsData.subject.length < 10 || StringFieldsData.subject.length > 50) {
        return 'min-max length limit reached subject';
      }
    }

    if (StringFieldsData.email_body) {
      if (typeof StringFieldsData.email_body !== 'string') {
        return 'email_body must be a string';
      }

      if (StringFieldsData.email_body.length < 10 || StringFieldsData.email_body.length > 200) {
        return 'min-max length limit reached email_body';
      }
    }
    return null;
  }
}

exports. default = new AdvicesValidations();
