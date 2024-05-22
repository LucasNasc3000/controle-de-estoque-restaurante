class CommomValidations{
  DoTheValidations(allData) {
    // Verificando se existem campos vazios
    for (let i in allData) {
      if (allData[i] === '') {
        return 'Empty field(s)';
      } else {
        return this.CheckForNullUndefinedFields(allData);
      }
    }
  }

  CheckForNullUndefinedFields(allData) {
    for (let i in allData) {
      if (typeof allData[i] === 'undefined' ||
          allData[i] === null
      ) {
        return 'Undefined or null field(s)';
      } else {
        return this.CheckNumericFields(allData);
      }
    }
  }

  CheckNumericFields(numericFieldsData) {
    if(
       typeof numericFieldsData.totalweight !== 'number' ||
       typeof numericFieldsData.weightperunit !== 'number'
    ) {
      return 'Type must be a number'
    } else {
      return this.CheckSimpleStrings(numericFieldsData);
    }
  }

  CheckSimpleStrings(simpleStringsFieldsData) {
    if(typeof simpleStringsFieldsData.name !== 'string' ||
       typeof simpleStringsFieldsData.type !== 'string'
    ) {
      return 'Type must be a string'
    } else {
      return null;
    }
  }
}

export default new CommomValidations();
