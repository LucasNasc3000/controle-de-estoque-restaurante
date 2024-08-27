"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Input = require('../../models/Input'); var _Input2 = _interopRequireDefault(_Input);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class InputFloatsSearch {
  async SearchByTotalWeight(totalweight) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        totalweight,
      },
      attributes: _Attributes2.default,
    });

    return inputFinder;
  }

  async SearchByWeightPerUnit(weightperunit) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        weightperunit,
      },
      attributes: _Attributes2.default,
    });

    return inputFinder;
  }
}

exports. default = new InputFloatsSearch();
