"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Sale = require('../../models/Sale'); var _Sale2 = _interopRequireDefault(_Sale);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class SalesSearchSalesData {
  async SearchById(id) {
    const SaleFinder = await _Sale2.default.findOne({
      where: {
        id,
      },
      attributes: _Attributes2.default,
    });

    return SaleFinder;
  }

  async SearchByemployeeId(employeeId) {
    const saleFinderByEmployeeId = await _Sale2.default.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: _Attributes2.default,
    });

    return saleFinderByEmployeeId;
  }

  async SearchByProducts(products) {
    const salesFinderByProducts = await _Sale2.default.findAll({
      where: {
        products: { [_sequelize.Op.like]: `%${products}%` },
      },
      attributes: _Attributes2.default,
    });

    return salesFinderByProducts;
  }

  async SearchDate(date) {
    const salesFinderDate = await _Sale2.default.findAll({
      where: {
        date: { [_sequelize.Op.startsWith]: date },
      },
      attributes: _Attributes2.default,
    });

    return salesFinderDate;
  }

  async SearchDateForDashboard(date, employeeId) {
    const salesFinderDate = await _Sale2.default.count({
      where: {
        date,
        employee_id: employeeId,
      },
    });

    return salesFinderDate;
  }

  async SearchByHour(hour) {
    const salesFinderByHour = await _Sale2.default.findAll({
      where: {
        hour: { [_sequelize.Op.startsWith]: hour },
      },
      attributes: _Attributes2.default,
    });

    return salesFinderByHour;
  }
}

exports. default = new SalesSearchSalesData();
