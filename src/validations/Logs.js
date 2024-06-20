import { dateRegex, hourRegex, dateAndHourErrorMsg } from "./DateTimeRegexConsts";

class LogsValidations {
  CheckUserId(data) {
    if(data.userId) {
      if(typeof data.userId !== 'string') {
        return 'Type must be a string'
      }
    }
    return this.CheckDatesAndHour(data)
  }

  CheckDatesAndHour(DatesFieldsData) {
    if(DatesFieldsData.date) {
      if(!dateRegex.test(DatesFieldsData.date)) {
        return dateAndHourErrorMsg;
      }
    }

    if(DatesFieldsData.time) {
      if(!hourRegex.test(DatesFieldsData.time)) {
        return dateAndHourErrorMsg;
      }
    }
    return null;
  }
}

export default new LogsValidations();
