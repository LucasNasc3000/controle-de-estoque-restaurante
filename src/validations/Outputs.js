import { dateRegex, hourRegex, dateAndHourErrorMsg } from './DateTimeRegexConsts';

class OutputsValidations {
  CheckIntegers(integersFieldData) {
    if (integersFieldData.unities) {
      if (typeof integersFieldData.unities !== 'number') {
        return 'Unities must be a number';
      }
    }
    return this.CheckFloats(integersFieldData);
  }

  CheckFloats(floatsFieldData) {
    if (floatsFieldData.weight) {
      if (typeof floatsFieldData.weight !== 'number') {
        return 'Weight must be a number';
      }
    }
    return this.CheckDatesAndHour(floatsFieldData);
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
