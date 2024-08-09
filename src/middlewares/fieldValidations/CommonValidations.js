/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
class CommomValidations {
  DoTheValidations(allData, isEmployee, isLog, isSale) {
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
        return 'Null field(s)';
      }
    }

    if (isSale === true) return null;

    if (isEmployee === true || isLog === true) {
      return this.CheckStrings(allData);
    }

    return this.CheckNumericFields(allData);
  }

  CheckNumericFields(numericFieldsData) {
    if (numericFieldsData.totalweight) {
      if (typeof numericFieldsData.totalweight !== 'number') {
        return 'Type must be a number';
      }
    }

    if (numericFieldsData.weightperunit) {
      if (typeof numericFieldsData.weightperunit !== 'number') {
        return 'Type must be a number';
      }
    }
    return this.CheckStrings(numericFieldsData);
  }

  CheckStrings(StringsFieldsData) {
    if (StringsFieldsData.employee_id) {
      if (typeof StringsFieldsData.employee_id !== 'string') {
        return 'Type must be a string';
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
