import {
  dateRegex, hourRegex, dateAndHourErrorMsg,
} from './DataRegex';

class InputsValidations {
  CheckIntegers(integersFieldData) {
    if (integersFieldData.quantity) {
      if (typeof integersFieldData.quantity !== 'number') {
        return 'Quantity must be a number';
      }
    }

    if (integersFieldData.minimun_quantity) {
      if (typeof integersFieldData.minimun_quantity !== 'number') {
        return 'minimun_quantity must be a number';
      }
    }
    return this.CheckStrings(integersFieldData);
  }

  CheckStrings(StringsFieldsData) {
    if (StringsFieldsData.supplier) {
      if (typeof StringsFieldsData.supplier !== 'string') {
        return 'Supplier must be a string';
      }
    }
    return this.CheckDatesAndHour(StringsFieldsData);
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
