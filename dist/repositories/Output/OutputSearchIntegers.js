"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Output = require('../../models/Output'); var _Output2 = _interopRequireDefault(_Output);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class OutputIntegersSearch {
  async SearchByID(id) {
    const outputFinder = await _Output2.default.findOne({
      where: {
        id,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return outputFinder;
  }

  async SearchByUnities(unities) {
    const outputFinder = await _Output2.default.findAll({
      where: {
        unities,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return outputFinder;
  }
}

exports. default = new OutputIntegersSearch();
