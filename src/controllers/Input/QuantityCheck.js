/* eslint-disable consistent-return */
import Notification from '../../Notifications/Notification';

class QuantityCheck {
  async QuantityCheck(inputData) {
    const rate = inputData[0] - inputData[1];
    const warningAndData = [];

    if (inputData.minimun_quantity === null) return;

    if (rate <= inputData[3] && rate > 0) {
      warningAndData.push('rate is near', inputData[2]);
      const rateisNear = await Notification.DataFilter(inputData, 'rateIsNear');

      if (rateisNear === null) return null;

      return warningAndData;
    } if (rate <= 0) {
      warningAndData.push('limit reached', inputData[2]);
      const limitReached = await Notification.DataFilter(inputData, 'limitReached');

      if (limitReached === null) return null;

      return warningAndData;
    }
    return null;
  }
}

export default new QuantityCheck();
