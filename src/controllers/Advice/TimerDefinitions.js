/* eslint-disable prefer-destructuring */
/* eslint-disable no-import-assign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import BirthdayNotice from '../../Notifications/BirthdayNotice';
import Advice from '../../repositories/Advice/Advice';
import AdviceSearch from '../../repositories/Advice/AdviceSearch';
import { TimerId, Timers } from './timersStore';

class TimerDefinition {
  SetTimer(date, hour) {
    const currentDate = this.GetCurrentDateHour();
    const adviceDate = this.AdviceFormatCorrectDateHour(date, hour);

    const setCurrentDate = new Date(currentDate[0]);
    setCurrentDate.setHours(currentDate[1], currentDate[2], currentDate[3]);

    const setAdviceDate = new Date(adviceDate[0]);
    setAdviceDate.setHours(adviceDate[1], adviceDate[2], adviceDate[3]);

    const advice = setAdviceDate.getTime() - setCurrentDate.getTime();

    return advice;
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

  AdviceFormatCorrectDateHour(date, hour) {
    let returnToStringLessTenAdvice = '';

    const year = date.slice(6, 10);
    const month = date.slice(3, 5);
    const day = date.slice(0, 2);

    const localDateForeignFormat = `${year}-${month}-${day}`;

    const hours = hour.slice(0, 2);
    const minutes = hour.slice(3, 5);
    const seconds = hour.slice(6, 9);

    const intHours = parseInt(hours, 10);
    const correctedHours = intHours - 3;

    if (correctedHours < 10) returnToStringLessTenAdvice = String(`0${correctedHours}`);

    if (returnToStringLessTenAdvice.length > 0) {
      return [
        localDateForeignFormat,
        returnToStringLessTenAdvice,
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

  async NewAdvice(date, hour, emailData, dbId, savedTimerId) {
    const getAdvice = this.SetTimer(date, hour);
    let maxTimerIdValue = 0;

    const GetMaxTimerIdValue = async () => {
      const getMaxTimerIdValue = await AdviceSearch.FoundMaxTimerId();
      maxTimerIdValue = getMaxTimerIdValue;
    };

    // se o timerId não der certo msm retornar o timer e procurar o indice no Timers pelo timer
    if (!savedTimerId) {
      await GetMaxTimerIdValue();
      TimerId = maxTimerIdValue + 1;
    }

    if (savedTimerId && typeof savedTimerId === 'number') TimerId = savedTimerId;

    const timer = setTimeout(() => {
      const sendEmail = async () => {
        BirthdayNotice.SendEmail(emailData[0], emailData[1]);
      };

      sendEmail();

      const findDbId = Timers.find((time) => time[0] === TimerId);

      const deleteFromDb = async () => {
        await Advice.Delete(findDbId[4]);
      };

      deleteFromDb();

      const findElement = Timers.find((time) => time[0] === TimerId);
      const findIndex = Timers.indexOf(findElement, 0);
      Timers.splice(findIndex);
    }, getAdvice);

    if (dbId) {
      Timers.push([TimerId, timer, emailData[0], emailData[1]], dbId);
    } else {
      Timers.push([TimerId, timer, emailData[0], emailData[1]]);
    }

    return [TimerId];
  }

  UpdatingAdvice(date, hour, timerId, emailData) {
    const getAdvice = this.SetTimer(date, hour);

    const findElement = Timers.find((time) => time[0] === timerId);
    const findIndexEmailData = Timers.indexOf(findElement, 0);

    clearTimeout(findElement[1]);

    if (emailData.length > 0) {
      // assunto
      if (emailData[0].length > 0) {
        Timers[findIndexEmailData][2] = emailData[0];
      }

      // corpo do email
      if (emailData[1].length > 0) {
        Timers[findIndexEmailData][3] = emailData[1];
      }
    }

    const timer = setTimeout(() => {
      const sendEmail = async () => {
        BirthdayNotice.SendEmail(emailData[0], emailData[1]);
      };

      sendEmail();

      const findDbId = Timers.find((time) => time[0] === TimerId);

      const deleteFromDb = async () => {
        await Advice.Delete(findDbId[4]);
      };

      deleteFromDb();

      const findElementUpdatedTimer = Timers.find((time) => time[0] === TimerId);
      const findIndex = Timers.indexOf(findElementUpdatedTimer, 0);
      Timers.splice(findIndex);
    }, getAdvice);

    // Atualiza o timer no superglobal Timers
    // As últimas 3 linnhas abaixo executam
    // na hora em que a função é chamada mas a função no timer fica pendente
    const findElementUpdate = Timers.find((time) => time[0] === timerId);
    const findIndex = Timers.indexOf(findElementUpdate, 0);
    Timers[findIndex][1] = timer;
  }

  async DeletingAdvice(databaseId) {
    const numberId = parseInt(databaseId, 10);

    const findElementDelete = Timers.find((time) => time[4] === numberId);
    const findIndex = Timers.indexOf(findElementDelete, 0);

    clearTimeout(Timers[findIndex][1]);

    await Advice.Delete(Timers[findIndex][4]);

    const findIndexSplice = Timers.indexOf(findIndex, 0);
    Timers.splice(findIndexSplice);
  }

  async Recovery(advicesDbCheck) {
    const adviceData = [];

    advicesDbCheck.map((advice) => {
      adviceData.push(
        [
          advice.date,
          advice.hour,
          advice.subject,
          advice.email_body,
          advice.id,
          advice.timer_id,
        ],
      );
    });

    if (advicesDbCheck.length > 0 && Timers.length < 1) {
      for (let i = 0; i < adviceData.length; i++) {
        this.NewAdvice(
          adviceData[i][0],
          adviceData[i][1],
          [adviceData[i][2], adviceData[i][3]],
          adviceData[i][4],
          adviceData[i][5],
        );
      }
    }
  }
}

export default new TimerDefinition();
