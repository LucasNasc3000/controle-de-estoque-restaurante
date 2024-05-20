class InputsValidations{

  CheckForEmptyFields(allData) {
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
        return this.CheckIntegersFields(allData);
      }
    }
  }

  CheckIntegersFields(integersFieldsData) {
    if(typeof integersFieldsData.quantity !== 'number') {
      return 'Type must be int'
    } else {
      return this.CheckFloatsFields(integersFieldsData);
    }
  }

  CheckFloatsFields(floatsFieldsData) {
    if(typeof floatsFieldsData.totalweight !== 'number' ||
       typeof floatsFieldsData.weightperunit !== 'number'
    ) {
      return 'Type must be float'
    }
  }
}

export default new InputsValidations();
