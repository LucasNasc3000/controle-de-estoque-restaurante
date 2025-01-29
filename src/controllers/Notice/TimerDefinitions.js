import { TimerId } from './timersStore';

class TimerDefinition {
  SetTimer(date, hour) {
    const currentDate = this.GetCurrentDateHour();
    const noticeDate = this.NoticeFormatCorrectDateHour(date, hour);

    const setCurrentDate = new Date(currentDate[0]);
    setCurrentDate.setHours(currentDate[1], currentDate[2], currentDate[3]);

    const setNoticeDate = new Date(noticeDate[0]);
    setNoticeDate.setHours(noticeDate[1], noticeDate[2], noticeDate[3]);

    const notice = setNoticeDate.getTime() - setCurrentDate.getTime();

    // eslint-disable-next-line no-import-assign
    TimerId += 1;

    const timer = setTimeout(() => {
      console.log('oi');
    }, notice);

    return [TimerId, timer];
  }

  GetCurrentDateHour() {
    const dateObj = new Date();
    let returnToStringLessTenCurrent = '';

    const localDate = dateObj.toLocaleString('pt-br', {
      dateStyle: 'short',
    });
    const localHour = dateObj.toLocaleTimeString('pt-br', {
      hourCycle: 'h24',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const localDateReplace = localDate.replaceAll('/', '-');
    const year = localDateReplace.slice(6, 10);
    const month = localDateReplace.slice(3, 5);
    const day = localDateReplace.slice(0, 2);
    const localDateForeignFormat = `${year}-${month}-${day}`;

    const hours = localHour.slice(0, 2);
    const minutes = localHour.slice(3, 5);
    const seconds = localHour.slice(6, 9);

    const intHours = parseInt(hours, 10);
    const correctedHours = intHours - 3;

    if (correctedHours < 10) returnToStringLessTenCurrent = String(`0${correctedHours}`);

    if (returnToStringLessTenCurrent.length > 0) {
      return [
        localDateForeignFormat,
        returnToStringLessTenCurrent,
        minutes,
        seconds,
      ];
    }

    const returnToString = String(correctedHours);

    return [
      localDateForeignFormat,
      returnToString,
      minutes,
      seconds,
    ];
  }

  NoticeFormatCorrectDateHour(date, hour) {
    let returnToStringLessTenNotice = '';
    let returnToStringDay = '';
    let localDateForeignFormat = '';

    const year = date.slice(6, 10);
    const month = date.slice(3, 5);
    const day = date.slice(0, 2);

    const hours = hour.slice(0, 2);
    const minutes = hour.slice(3, 5);
    const seconds = hour.slice(6, 9);

    const intHours = parseInt(hours, 10);
    const correctedHours = intHours - 3;

    if (correctedHours < 10) returnToStringLessTenNotice = String(`0${correctedHours}`);

    // A partir de 21:00 no horário de Brasília GMT será 00:00 no UTC, fuso horário do Date()
    if (correctedHours > 20 && correctedHours < 24) {
      if (day[1] === '0') {
        let numericDay = parseInt(day[1], 10);
        numericDay += 1;
        returnToStringDay = String(numericDay);
        localDateForeignFormat = `${year}-${month}-${returnToStringDay}`;
      }

      let numericDay = parseInt(day, 10);
      numericDay += 1;
      returnToStringDay = String(numericDay);
      localDateForeignFormat = `${year}-${month}-${returnToStringDay}`;
    } else {
      localDateForeignFormat = `${year}-${month}-${day}`;
    }

    if (returnToStringLessTenNotice.length > 0) {
      return [
        localDateForeignFormat,
        returnToStringLessTenNotice,
        minutes,
        seconds,
      ];
    }

    const returnToString = String(correctedHours);

    return [
      localDateForeignFormat,
      returnToString,
      minutes,
      seconds,
    ];
  }
}

export default new TimerDefinition();
