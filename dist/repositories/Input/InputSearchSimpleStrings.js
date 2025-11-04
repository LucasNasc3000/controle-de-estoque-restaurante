"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Input = require('../../models/Input'); var _Input2 = _interopRequireDefault(_Input);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class InputSimpleStringSearch {
  async SearchByCategory(category) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        category: { [_sequelize.Op.startsWith]: category },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByNameForUsers(name) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        name: { [_sequelize.Op.startsWith]: name },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByNameInternal(name) {
    const inputFinder = await _Input2.default.findOne({
      where: {
        name,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchBySupplier(supplier) {
    const inputFinder = await _Input2.default.findAll({
      where: {
        supplier: { [_sequelize.Op.startsWith]: supplier },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByEmployeeId(employeeId) {
    const inputFinderByEmployeeId = await _Input2.default.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinderByEmployeeId;
  }
}

exports. default = new InputSimpleStringSearch();
