class CommomValidations{
  DoTheValidations(allData, isUser, isLog) {
    for (let i in allData) {
      if (allData[i] === '') {
        return 'Empty field(s)';
      }
    }
    return this.CheckForNullUndefinedFields(allData, isUser, isLog);
  }

  CheckForNullUndefinedFields(allData, isUser, isLog) {
    for (let i in allData) {
      if (typeof allData[i] === 'undefined') {
        return 'Undefined field(s)';
      }

      if (allData[i] === null) {
        return 'Null field(s)';
      }
    }

    if(isUser === true || isLog === true) {
      return this.CheckSimpleStrings(allData);
    }

    return this.CheckNumericFields(allData);
  }

  CheckNumericFields(numericFieldsData) {
    if(numericFieldsData.totalweight) {
      if(typeof numericFieldsData.totalweight !== 'number') {
        return 'Type must be a number';
      }
    }

    if(numericFieldsData.weightperunit) {
      if(typeof numericFieldsData.weightperunit !== 'number') {
        return 'Type must be a number';
      }
    }
    return this.CheckSimpleStrings(numericFieldsData);
  }

  CheckSimpleStrings(simpleStringsFieldsData) {
    if(simpleStringsFieldsData.type) {
      if(typeof simpleStringsFieldsData.type !== 'string') {
        return 'Type must be a string';
      }
    }

    if(simpleStringsFieldsData.name) {
      if(typeof simpleStringsFieldsData.name !== 'string') {
        return 'Type must be a string';
      }
    }
    return null;
  }
}

export default new CommomValidations();
