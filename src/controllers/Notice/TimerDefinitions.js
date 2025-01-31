/* eslint-disable no-import-assign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import Notice from '../../repositories/Notice/Notice';
import { TimerId, Timers } from './timersStore';

class TimerDefinition {
  SetTimer(date, hour) {
    const currentDate = this.GetCurrentDateHour();
    const noticeDate = this.NoticeFormatCorrectDateHour(date, hour);

    const setCurrentDate = new Date(currentDate[0]);
    setCurrentDate.setHours(currentDate[1], currentDate[2], currentDate[3]);

    const setNoticeDate = new Date(noticeDate[0]);
    setNoticeDate.setHours(noticeDate[1], noticeDate[2], noticeDate[3]);

    const notice = setNoticeDate.getTime() - setCurrentDate.getTime();

    return notice;
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

    const year = date.slice(6, 10);
    const month = date.slice(3, 5);
    const day = date.slice(0, 2);

    const localDateForeignFormat = `${year}-${month}-${day}`;

    const hours = hour.slice(0, 2);
    const minutes = hour.slice(3, 5);
    const seconds = hour.slice(6, 9);

    const intHours = parseInt(hours, 10);
    const correctedHours = intHours - 3;

    if (correctedHours < 10) returnToStringLessTenNotice = String(`0${correctedHours}`);

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

  NewNotice(date, hour) {
    const getNotice = this.SetTimer(date, hour);

    TimerId += 1;

    const timer = setTimeout(() => {
      console.log('oi');

      const findDbId = Timers.find((time) => time[0] === TimerId);

      const deleteFromDb = async () => {
        await Notice.Delete(findDbId[2]);
      };

      deleteFromDb();

      const findElement = Timers.find((time) => time[0] === TimerId);
      const findIndex = Timers.indexOf(findElement, 0);
      Timers.splice(findIndex);
    }, getNotice);

    Timers.push([TimerId, timer]);

    return [TimerId];
  }

  UpdatingNotice(date, hour, timerId) {
    const getNotice = this.SetTimer(date, hour);

    const findElement = Timers.find((time) => time[0] === timerId);

    clearTimeout(findElement[1]);

    const timer = setTimeout(() => {
      console.log('oi');

      const findDbId = Timers.find((time) => time[0] === TimerId);

      const deleteFromDb = async () => {
        await Notice.Delete(findDbId[2]);
      };

      deleteFromDb();

      const findElementUpdatedTimer = Timers.find((time) => time[0] === TimerId);
      const findIndex = Timers.indexOf(findElementUpdatedTimer, 0);
      Timers.splice(findIndex);
    }, getNotice);

    const findElementUpdate = Timers.find((time) => time[0] === timerId);
    const findIndex = Timers.indexOf(findElementUpdate, 0);
    Timers[findIndex][1] = timer;
  }
}

export default new TimerDefinition();
