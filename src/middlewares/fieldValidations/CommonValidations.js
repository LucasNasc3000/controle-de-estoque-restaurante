/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { uuidCheck } from './DataRegex';

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

        if (allData[i] === allData.client_birthday && allData.client_birthday === null) {
          return this.CheckStrings(allData);
        }

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
      if (!uuidCheck.test(StringsFieldsData.employee_id)) {
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

export default new CommomValidations();
