/* eslint-disable consistent-return */
import Notification from '../Notifications/Notification';

class QuantityCheck {
  QuantityCheck(inputData) {
    const rate = inputData[0] - inputData[1];
    const warningAndData = [];

    if (inputData.minimun_quantity === null) return;

    if (rate <= 15 && rate > 0) {
      warningAndData.push('rate is near', inputData[2]);
      Notification.RateIsNear('lucasfortunato328@gmail.com', inputData);

      return warningAndData;
    } if (rate <= 0) {
      warningAndData.push('limit reached', inputData[2]);
      Notification.LimitReached('lucasfortunato328@gmail.com', inputData);

      return warningAndData;
    }
    return null;
  }
}

export default new QuantityCheck();
