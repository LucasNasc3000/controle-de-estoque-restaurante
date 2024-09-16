"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Input = require('../../models/Input'); var _Input2 = _interopRequireDefault(_Input);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class InputIntegerSearch {
  async SearchByID(id) {
    const inputFinder = await _Input2.default.findOne({
      where: {
        id,
      },
      attributes: _Attributes2.default,
    });

    return inputFinder;
  }

  async SearchByQuantity(quantity) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        quantity,
      },
      attributes: _Attributes2.default,
    });

    return inputFinder;
  }

  async SearchByMinimunQuantity(minimunQuantity) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        minimun_quantity: minimunQuantity,
      },
      attributes: _Attributes2.default,
    });

    return inputFinder;
  }
}

exports. default = new InputIntegerSearch();
