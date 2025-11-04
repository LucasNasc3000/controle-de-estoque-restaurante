"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
var _DataRegex = require('./DataRegex');

class CommomValidations {
  DoTheValidations(allData, isEmployee, isLog, isSale, isUpdate) {
    if (isUpdate === true) {
      return this.CheckForNullUndefinedFields(allData, isEmployee, isLog, isSale);
    }

    for (const i in allData) {
      if (allData[i] === '') {
        return 'Empty field(s)';
      }
    }
    return this.CheckForNullUndefinedFields(allData, isEmployee, isLog, isSale);
  }

  CheckForNullUndefinedFields(allData, isEmployee, isLog, isSale) {
    for (const i in allData) {
      if (typeof allData[i] === 'undefined') {
        return 'Undefined field(s)';
      }

      if (allData[i] === null) {
        if (allData[i] === allData.boss && allData.boss === null) {
          return this.CheckStrings(allData);
        }

<<<<<<< HEAD
=======
        if (allData[i] === allData.client_birthday && allData.client_birthday === null) {
          return this.CheckStrings(allData);
        }

>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
        return 'Null field(s)';
      }
    }

    if (isSale === true) return null;

    if (isEmployee === true || isLog === true) {
      return this.CheckStrings(allData);
    }

    return this.CheckStrings(allData);
  }

  CheckStrings(StringsFieldsData) {
    if (StringsFieldsData.employee_id) {
      if (!_DataRegex.uuidCheck.test(StringsFieldsData.employee_id)) {
        return 'employee_id must be a uuid';
      }
    }

    if (StringsFieldsData.type) {
      if (typeof StringsFieldsData.type !== 'string') {
        return 'Type must be a string';
      }
    }

    if (StringsFieldsData.name) {
      if (typeof StringsFieldsData.name !== 'string') {
        return 'Type must be a string';
      }
    }
    return null;
  }
}

exports. default = new CommomValidations();
