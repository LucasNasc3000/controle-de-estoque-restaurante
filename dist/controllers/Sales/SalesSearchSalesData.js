"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _SalesSearchSalesData = require('../../repositories/Sales/SalesSearchSalesData'); var _SalesSearchSalesData2 = _interopRequireDefault(_SalesSearchSalesData);

class SalesSearchSalesDataController {
  async SearchById(req, res, next) {
    try {
      const { id } = req.params;

      const saleIdFinder = await
      _SalesSearchSalesData2.default.SearchById(id);

      if (!saleIdFinder) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(saleIdFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmployeeId(req, res, next) {
    try {
      const { employeeid } = req.params;

      const salesEmployeeIdFinder = await _SalesSearchSalesData2.default.SearchByemployeeId(employeeid);

      if (!salesEmployeeIdFinder) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(salesEmployeeIdFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByProducts(req, res, next) {
    try {
      const { products } = req.params;

      const employeeProductsFinder = await
      _SalesSearchSalesData2.default.SearchByProducts(products);

      if (!employeeProductsFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (employeeProductsFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(employeeProductsFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByDate(req, res, next) {
    try {
      const { date } = req.params;

      const employeeDateFinder = await
      _SalesSearchSalesData2.default.SearchDate(date);

      if (!employeeDateFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (employeeDateFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(employeeDateFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByHour(req, res, next) {
    try {
      const { hour } = req.params;

      const employeeHourFinder = await
      _SalesSearchSalesData2.default.SearchByHour(hour);

      if (!employeeHourFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (employeeHourFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(employeeHourFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new SalesSearchSalesDataController();
