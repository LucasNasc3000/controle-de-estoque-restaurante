class InputsValidations {
  CheckIntegers(integersFieldData) {
    if(typeof integersFieldData.quantity !== 'number') {
      return 'Quantity must be a number';
    } else {
      return this.CheckSimpleStrings(integersFieldData);
    }
  }

  CheckSimpleStrings(simpleStringsFieldsData) {
    if(typeof simpleStringsFieldsData.supplier !== 'string') {
      return 'Supplier must be a string';
    } else {
      return this.CheckDatesAndHour(simpleStringsFieldsData);
    }
  }

  CheckDatesAndHour(DatesFieldsData) {
    const dateRegex = /d{0,9}\-\d{0,9}\-\d{0,9}/
    const hourRegex = /(0?[0-9]|1[0-9]|2[0-3]):[0-9]+:(0?[0-9]|[1-5][0-9])/

    if(!dateRegex.test(DatesFieldsData.entrydate)  ||
       !dateRegex.test(DatesFieldsData.expirationdate) ||
       !hourRegex.test(DatesFieldsData.entryhour)
    ) {
      return 'Field(s) must be a date or hour string'
    } else {
      return null;
    }
  }
}

export default new InputsValidations();
