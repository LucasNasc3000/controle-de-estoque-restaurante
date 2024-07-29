import { dateRegex, hourRegex, dateAndHourErrorMsg } from './DateTimeRegexConsts';

class InputsValidations {
  CheckIntegers(integersFieldData) {
    if (integersFieldData.quantity) {
      if (typeof integersFieldData.quantity !== 'number') {
        return 'Quantity must be a number';
      }
    }
    return this.CheckSimpleStrings(integersFieldData);
  }

  CheckSimpleStrings(simpleStringsFieldsData) {
    if (simpleStringsFieldsData.supplier) {
      if (typeof simpleStringsFieldsData.supplier !== 'string') {
        return 'Supplier must be a string';
      }
    }
    return this.CheckDatesAndHour(simpleStringsFieldsData);
  }

  CheckDatesAndHour(DatesFieldsData) {
    if (DatesFieldsData.entrydate) {
      if (!dateRegex.test(DatesFieldsData.entrydate)) {
        return dateAndHourErrorMsg;
      }
    }

    if (DatesFieldsData.expirationdate) {
      if (!dateRegex.test(DatesFieldsData.expirationdate)) {
        return dateAndHourErrorMsg;
      }
    }

    if (DatesFieldsData.entryhour) {
      if (!hourRegex.test(DatesFieldsData.entryhour)) {
        return dateAndHourErrorMsg;
      }
    }
    return null;
  }
}

export default new InputsValidations();
