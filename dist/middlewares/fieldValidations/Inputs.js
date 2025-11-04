"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _DataRegex = require('./DataRegex');

class InputsValidations {
  CheckIntegers(IntegersFieldsData) {
    if (IntegersFieldsData.quantity) {
      if (!Number.isInteger(IntegersFieldsData.quantity)) {
        return 'Quantity must be a integer';
      }
    }

    if (IntegersFieldsData.minimun_quantity) {
      if (!Number.isInteger(IntegersFieldsData.minimun_quantity)) {
        return 'Minimun_quantity must be a integer';
      }
    }
    return this.CheckStrings(IntegersFieldsData);
  }

  CheckStrings(StringsFieldsData) {
    if (StringsFieldsData.supplier) {
      if (typeof StringsFieldsData.supplier !== 'string') {
        return 'Supplier must be a string';
      }
    }

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
