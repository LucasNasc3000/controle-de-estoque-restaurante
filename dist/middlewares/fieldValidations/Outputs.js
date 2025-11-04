"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _DataRegex = require('./DataRegex');

class OutputsValidations {
  CheckIntegers(integersFieldData) {
    if (integersFieldData.unities) {
      if (!Number.isInteger(integersFieldData.unities)) {
        return 'Unities must be a integer';
      }
    }
    return this.CheckStrings(integersFieldData);
  }

  CheckStrings(StringsFieldsData) {
    if (StringsFieldsData.reason) {
      if (!_DataRegex.alphabetRegex.test(StringsFieldsData.reason)) {
        return 'Reason must be an alphabet string';
      }
    }

    if (StringsFieldsData.category) {
      if (!_DataRegex.alphabetRegex.test(StringsFieldsData.category)) {
        return 'Category must be an alphabet string';
      }
    }

    if (StringsFieldsData.name) {
      if (typeof StringsFieldsData.name !== 'string') {
        return 'Name must be an alphabet string';
      }
    }
    return this.CheckDatesAndHour(StringsFieldsData);
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
