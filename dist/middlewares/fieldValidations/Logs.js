"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _DataRegex = require('./DataRegex');

class LogsValidations {
  CheckEmployeeId(data) {
    if (data.employeeId) {
      if (typeof data.employeeId !== 'string') {
        return 'Type must be a string';
      }

      if (!_DataRegex.uuidCheck.test(data.employeeId)) {
        return 'Type must be a string';
      }
    }
    return this.CheckDatesAndHour(data);
  }

  CheckDatesAndHour(DatesFieldsData) {
    if (DatesFieldsData.date) {
      if (!_DataRegex.dateRegex.test(DatesFieldsData.date)) {
        return _DataRegex.dateAndHourErrorMsg;
      }
    }

    if (DatesFieldsData.time) {
      if (!_DataRegex.hourRegex.test(DatesFieldsData.time)) {
        return _DataRegex.dateAndHourErrorMsg;
      }
    }
    return null;
  }
}

exports. default = new LogsValidations();
