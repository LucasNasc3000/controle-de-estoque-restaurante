"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _DataRegex = require('./DataRegex');

class InputsValidations {
  CheckIntegers(integersFieldData) {
    if (integersFieldData.quantity) {
      if (typeof integersFieldData.quantity !== 'number') {
        return 'Quantity must be a number';
      }
    }

    if (integersFieldData.minimun_quantity) {
      if (typeof integersFieldData.minimun_quantity !== 'number') {
        return 'minimun_quantity must be a number';
      }
    }
    return this.CheckStrings(integersFieldData);
  }

  CheckStrings(StringsFieldsData) {
    if (StringsFieldsData.supplier) {
      if (typeof StringsFieldsData.supplier !== 'string') {
        return 'Supplier must be a string';
      }
    }
    return this.CheckDatesAndHour(StringsFieldsData);
  }

  CheckDatesAndHour(DatesFieldsData) {
    if (DatesFieldsData.entrydate) {
      if (!_DataRegex.dateRegex.test(DatesFieldsData.entrydate)) {
        return _DataRegex.dateAndHourErrorMsg;
      }
    }

    if (DatesFieldsData.expirationdate) {
      if (!_DataRegex.dateRegex.test(DatesFieldsData.expirationdate)) {
        return _DataRegex.dateAndHourErrorMsg;
      }
    }

    if (DatesFieldsData.entryhour) {
      if (!_DataRegex.hourRegex.test(DatesFieldsData.entryhour)) {
        return _DataRegex.dateAndHourErrorMsg;
      }
    }
    return null;
  }
}

exports. default = new InputsValidations();
