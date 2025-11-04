"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Input = require('../../models/Input'); var _Input2 = _interopRequireDefault(_Input);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class InputDatesSearch {
  async SearchByExpirationDate(expirationdate) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        expirationdate: { [_sequelize.Op.startsWith]: expirationdate },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }
}

exports. default = new InputDatesSearch();
