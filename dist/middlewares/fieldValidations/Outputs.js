"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _DataRegex = require('./DataRegex');

class OutputsValidations {
  CheckIntegers(integersFieldData) {
    if (integersFieldData.unities) {
      if (typeof integersFieldData.unities !== 'number') {
        return 'Unities must be a number';
      }
    }
    return this.CheckFloats(integersFieldData);
  }

  CheckFloats(floatsFieldData) {
    if (floatsFieldData.weight) {
      if (typeof floatsFieldData.weight !== 'number') {
        return 'Weight must be a number';
      }
    }
    return this.CheckDatesAndHour(floatsFieldData);
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

exports. default = new OutputsValidations();
