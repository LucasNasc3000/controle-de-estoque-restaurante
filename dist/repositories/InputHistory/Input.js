"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _InputHistory = require('../../models/InputHistory'); var _InputHistory2 = _interopRequireDefault(_InputHistory);

class InputsList {
  async Store(data) {
    const newInput = await _InputHistory2.default.create(data);
    return newInput;
  }
}

exports. default = new InputsList();
