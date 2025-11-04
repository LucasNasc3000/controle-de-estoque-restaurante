"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Input = require('../../models/Input'); var _Input2 = _interopRequireDefault(_Input);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class InputFloatsSearch {
  async SearchByTotalWeight(totalweight) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        totalweight,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByWeightPerUnit(weightperunit) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        weightperunit,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByPrice(price) {
    const inputsFinderByPrice = await _Input2.default.findAll({
      where: {
        price: { [_sequelize.Op.startsWith]: price },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputsFinderByPrice;
  }
}

exports. default = new InputFloatsSearch();
