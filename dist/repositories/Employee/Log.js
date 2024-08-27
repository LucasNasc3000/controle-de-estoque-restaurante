"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _Log = require('../../models/Log'); var _Log2 = _interopRequireDefault(_Log);

class LogsList {
  async Store(data) {
    const store = await _Log2.default.create(data);
    return store;
  }
}

exports. default = new LogsList();
