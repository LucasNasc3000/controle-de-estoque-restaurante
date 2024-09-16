"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Output = require('../../models/Output'); var _Output2 = _interopRequireDefault(_Output);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class OutputFloatsSearch {
  async SearchByWeight(weight) {
    const outputFinder = await _Output2.default.findAll({
      where: {
        weight: { [_sequelize.Op.startsWith]: weight },
      },
      attributes: _Attributes2.default,
    });

    return outputFinder;
  }
}

exports. default = new OutputFloatsSearch();
