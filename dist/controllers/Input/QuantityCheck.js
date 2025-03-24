"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _RegistersNotifications = require('../../Notifications/RegistersNotifications'); var _RegistersNotifications2 = _interopRequireDefault(_RegistersNotifications);

class QuantityCheck {
  async QuantityCheck(inputData) {
    const rate = inputData[0] - inputData[1];
    const warningAndData = [];

    if (inputData[1] === null) return;

    if (rate <= inputData[3] && rate > 0) {
      warningAndData.push('rate is near', inputData[2]);
      const rateisNear = await _RegistersNotifications2.default.DataFilter(inputData, 'rateIsNear');

      if (rateisNear === 'no destinataries') return 'no destinataries';

      return warningAndData;
    }

    if (rate <= 0) {
      warningAndData.push('limit reached', inputData[2]);
      const limitReached = await _RegistersNotifications2.default.DataFilter(inputData, 'limitReached');

      if (limitReached === 'no destinataries') return 'no destinataries';

      return warningAndData;
    }
    return null;
  }
}

exports. default = new QuantityCheck();
