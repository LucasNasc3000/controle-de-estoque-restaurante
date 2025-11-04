"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _InputHistory = require('../../models/InputHistory'); var _InputHistory2 = _interopRequireDefault(_InputHistory);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class InputFloatsSearch {
  async SearchByTotalWeightPerRegister(totalWeightPerRegister) {
    const inputFinder = await _InputHistory2.default.findAll({
      where: {
        totalweight_per_register: totalWeightPerRegister,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByWeightPerUnit(weightperunit) {
    const inputFinder = await _InputHistory2.default.findAll({
      where: {
        weightperunit,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByPrice(price) {
    const inputsFinderByPrice = await _InputHistory2.default.findAll({
      where: {
        price: { [_sequelize.Op.startsWith]: price },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputsFinderByPrice;
  }

  async SearchByTotalPrice(totalprice) {
    const inputsFinderByTotalPrice = await _InputHistory2.default.findAll({
      where: {
        totalprice: { [_sequelize.Op.startsWith]: totalprice },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputsFinderByTotalPrice;
  }
}

exports. default = new InputFloatsSearch();
