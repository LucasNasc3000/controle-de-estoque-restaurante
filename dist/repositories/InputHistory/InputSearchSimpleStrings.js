"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _InputHistory = require('../../models/InputHistory'); var _InputHistory2 = _interopRequireDefault(_InputHistory);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class InputSimpleStringSearch {
  async SearchByCategory(category) {
    const inputFinder = await _InputHistory2.default.findAll({
      where: {
        category: { [_sequelize.Op.startsWith]: category },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByNameInternal(name) {
    const inputFinder = await _InputHistory2.default.findOne({
      where: {
        name,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByNameForUsers(name) {
    const inputFinder = await _InputHistory2.default.findOne({
      where: {
        name,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchBySupplier(supplier) {
    const inputFinder = await _InputHistory2.default.findAll({
      where: {
        supplier: { [_sequelize.Op.startsWith]: supplier },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByEmployeeId(employeeId) {
    const inputFinderByEmployeeId = await _InputHistory2.default.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinderByEmployeeId;
  }

  async SearchByReason(reason) {
    const inputFinder = await _InputHistory2.default.findAll({
      where: {
        reason: { [_sequelize.Op.startsWith]: reason },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }
}

exports. default = new InputSimpleStringSearch();
