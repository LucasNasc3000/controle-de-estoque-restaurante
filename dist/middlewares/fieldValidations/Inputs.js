"use strict";Object.defineProperty(exports, "__esModule", {value: true});


<<<<<<< HEAD


var _DataRegex = require('./DataRegex');

class InputsValidations {
  CheckIntegers(IntegersFieldsData) {
    if (IntegersFieldsData.quantity) {
      if (!Number.isInteger(IntegersFieldsData.quantity)) {
=======
var _DataRegex = require('./DataRegex');

class InputsValidations {
  CheckIntegers(integersFieldData) {
    if (integersFieldData.quantity) {
      if (!Number.isInteger(integersFieldData.quantity)) {
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
        return 'Quantity must be a integer';
      }
    }

<<<<<<< HEAD
    if (IntegersFieldsData.minimun_quantity) {
      if (!Number.isInteger(IntegersFieldsData.minimun_quantity)) {
        return 'Minimun_quantity must be a integer';
=======
    if (integersFieldData.minimun_quantity) {
      if (!Number.isInteger(integersFieldData.minimun_quantity)) {
        return 'minimun_quantity must be a integer';
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
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
