"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Output = require('../../models/Output'); var _Output2 = _interopRequireDefault(_Output);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class OutputSimpleStringSearch {
  async SearchByType(type) {
    const outputFinder = await _Output2.default.findAll({
      where: {
        type: { [_sequelize.Op.startsWith]: type },
      },
      attributes: _Attributes2.default,
    });

    return outputFinder;
  }

  async SearchByName(name) {
    const outputFinder = await _Output2.default.findAll({
      where: {
        name: { [_sequelize.Op.startsWith]: name },
      },
      attributes: _Attributes2.default,
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
}

exports. default = new OutputSimpleStringSearch();
