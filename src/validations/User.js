class UserValidations {
  CheckEmail(EmailFieldData) {
    for (let i in EmailFieldData) {
      if(EmailFieldData[i] !== '@') {
        return 'Must be a valid email';
      }

      if(EmailFieldData[i] !== '.com') {
        return 'Must be a valid email';
      }
    }
    return this.CheckDatesAndHour(EmailFieldData);
  }

  CheckDatesAndHour(DatesFieldsData) {
    const dateRegex = /d{0,9}\-\d{0,9}\-\d{0,9}/
    const hourRegex = /(0?[0-9]|1[0-9]|2[0-3]):[0-9]+:(0?[0-9]|[1-5][0-9])/

    if(DatesFieldsData.logdate) {
      if(!dateRegex.test(DatesFieldsData.date)) {
        return 'Field(s) must be a date or hour string';;
      }
    }

    if(DatesFieldsData.loghour) {
      if(!hourRegex.test(DatesFieldsData.hour)) {
        return 'Field(s) must be a date or hour string';;
      }
    }
    return null;
  }
}

export default new UserValidations();
