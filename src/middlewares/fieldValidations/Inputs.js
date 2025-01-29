import {
  dateAndHourErrorMsg,
  dateRegex, hourRegex,
} from './DataRegex';

class InputsValidations {
  CheckIntegers(integersFieldData) {
    if (integersFieldData.quantity) {
      if (!Number.isInteger(integersFieldData.quantity)) {
        return 'Quantity must be a integer';
      }
    }

    if (integersFieldData.minimun_quantity) {
      if (!Number.isInteger(integersFieldData.minimun_quantity)) {
        return 'minimun_quantity must be a integer';
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
