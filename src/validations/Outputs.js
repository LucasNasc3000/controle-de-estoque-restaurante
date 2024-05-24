class OutputsValidations {
  CheckIntegers(integersFieldData) {
    if(integersFieldData.unities) {
      if(typeof integersFieldData.unities !== 'number') {
        return 'Unities must be a number';
      }
    }
    return this.CheckFloats(integersFieldData);
  }

  CheckFloats(floatsFieldData) {
    if(floatsFieldData.weight) {
      if(typeof floatsFieldData.weight !== 'number') {
        return 'Weight must be a number';
      }
    }
    return this.CheckDatesAndHour(floatsFieldData);
  }

  CheckDatesAndHour(DatesFieldsData) {
    const dateRegex = /d{0,9}\-\d{0,9}\-\d{0,9}/
    const hourRegex = /(0?[0-9]|1[0-9]|2[0-3]):[0-9]+:(0?[0-9]|[1-5][0-9])/

    if(DatesFieldsData.date) {
      if(!dateRegex.test(DatesFieldsData.date)) {
        return 'Field(s) must be a date or hour string';;
      }
    }

    if(DatesFieldsData.hour) {
      if(!hourRegex.test(DatesFieldsData.hour)) {
        return 'Field(s) must be a date or hour string';;
      }
    }
    return null;
  }
}

export default new OutputsValidations();
