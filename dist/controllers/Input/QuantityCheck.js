"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _Notification = require('../../Notifications/Notification'); var _Notification2 = _interopRequireDefault(_Notification);

class QuantityCheck {
  async QuantityCheck(inputData) {
    const rate = inputData[0] - inputData[1];
    const warningAndData = [];

    if (inputData.minimun_quantity === null) return;

    if (rate <= 15 && rate > 0) {
      warningAndData.push('rate is near', inputData[2]);
      const rateisNear = await _Notification2.default.DataFilter(inputData, 'rateIsNear');

      if (rateisNear === null) return null;

      return warningAndData;
    } if (rate <= 0) {
      warningAndData.push('limit reached', inputData[2]);
      const limitReached = await _Notification2.default.DataFilter(inputData, 'limitReached');

      if (limitReached === null) return null;

      return warningAndData;
    }
    return null;
  }
}

exports. default = new QuantityCheck();
