class CommomValidations{
  DoTheValidations(allData) {
    // Verificando se existem campos vazios
    for (let i in allData) {
      if (allData[i] === '') {
        return 'Empty field(s)';
      }
    }
    return this.CheckForNullUndefinedFields(allData);
  }

  CheckForNullUndefinedFields(allData) {
    for (let i in allData) {
      if (typeof allData[i] === 'undefined') {
        return 'Undefined field(s)';
      }

      if (typeof allData[i] === null) {
        return 'Null field(s)';
      }
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
