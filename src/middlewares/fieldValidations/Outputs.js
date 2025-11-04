import {
  alphabetRegex, dateAndHourErrorMsg, dateRegex, hourRegex,
} from './DataRegex';

class OutputsValidations {
  CheckIntegers(integersFieldData) {
    if (integersFieldData.unities) {
      if (!Number.isInteger(integersFieldData.unities)) {
        return 'Unities must be a integer';
      }
    }
    return this.CheckStrings(integersFieldData);
  }

  CheckStrings(StringsFieldsData) {
    if (StringsFieldsData.reason) {
      if (!alphabetRegex.test(StringsFieldsData.reason)) {
        return 'Reason must be an alphabet string';
      }
    }

    if (StringsFieldsData.category) {
      if (!alphabetRegex.test(StringsFieldsData.category)) {
        return 'Category must be an alphabet string';
      }
    }

    if (StringsFieldsData.name) {
      if (typeof StringsFieldsData.name !== 'string') {
        return 'Name must be an alphabet string';
      }
    }
    return this.CheckDatesAndHour(StringsFieldsData);
  }

  CheckDatesAndHour(DatesFieldsData) {
    if (DatesFieldsData.date) {
      if (!dateRegex.test(DatesFieldsData.date)) {
        return dateAndHourErrorMsg;
      }
    }

    if (DatesFieldsData.hour) {
      if (!hourRegex.test(DatesFieldsData.hour)) {
        return dateAndHourErrorMsg;
      }
    }
    return null;
  }
}

export default new OutputsValidations();
