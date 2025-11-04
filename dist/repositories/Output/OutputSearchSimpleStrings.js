"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Output = require('../../models/Output'); var _Output2 = _interopRequireDefault(_Output);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class OutputSimpleStringSearch {
  async SearchByCategory(category) {
    const outputFinder = await _Output2.default.findAll({
      where: {
        category: { [_sequelize.Op.startsWith]: category },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return outputFinder;
  }

  async SearchByName(name) {
    const outputFinder = await _Output2.default.findAll({
      where: {
        name: { [_sequelize.Op.startsWith]: name },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return outputFinder;
  }

  async SearchByEmployeeId(employeeId) {
    const outputFinderByEmployeeId = await _Output2.default.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: _Attributes2.default,
    });

    return outputFinderByEmployeeId;
  }

  async SearchByReason(reason) {
    const inputFinder = await _Output2.default.findAll({
      where: {
        reason: { [_sequelize.Op.startsWith]: reason },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }
}

exports. default = new OutputSimpleStringSearch();
