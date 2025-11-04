import {
  alphabetRegex,
  dateAndHourErrorMsg,
  dateRegex,
  hourRegex,
} from './DataRegex';

class InputsValidations {
  CheckIntegers(IntegersFieldsData) {
    if (IntegersFieldsData.quantity) {
      if (!Number.isInteger(IntegersFieldsData.quantity)) {
        return 'Quantity must be a integer';
      }
    }

    if (IntegersFieldsData.minimun_quantity) {
      if (!Number.isInteger(IntegersFieldsData.minimun_quantity)) {
        return 'Minimun_quantity must be a integer';
      }
    }
    return this.CheckStrings(IntegersFieldsData);
  }

  CheckStrings(StringsFieldsData) {
    if (StringsFieldsData.supplier) {
      if (typeof StringsFieldsData.supplier !== 'string') {
        return 'Supplier must be a string';
      }
    }

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
