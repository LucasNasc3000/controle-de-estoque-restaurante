"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _InputHistory = require('../../models/InputHistory'); var _InputHistory2 = _interopRequireDefault(_InputHistory);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class InputIntegerSearch {
  async SearchByID(id) {
    const inputFinder = await _InputHistory2.default.findOne({
      where: {
        id,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByQuantity(quantity) {
    const inputFinder = await _InputHistory2.default.findAll({
      where: {
        quantity,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByMinimunQuantity(minimunQuantity) {
    const inputFinder = await _InputHistory2.default.findAll({
      where: {
        minimun_quantity: minimunQuantity,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }
}

exports. default = new InputIntegerSearch();
