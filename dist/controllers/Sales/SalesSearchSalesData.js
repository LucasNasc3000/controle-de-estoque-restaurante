"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable array-callback-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _EmployeeSearchBoss = require('../../repositories/Employee/EmployeeSearchBoss'); var _EmployeeSearchBoss2 = _interopRequireDefault(_EmployeeSearchBoss);
var _EmployeeSearchCredentials = require('../../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);
var _SalesSearchSalesData = require('../../repositories/Sales/SalesSearchSalesData'); var _SalesSearchSalesData2 = _interopRequireDefault(_SalesSearchSalesData);


var _ReplaceDot = require('./ReplaceDot');

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
      const { forListSales, employeeidBody } = req.body;

      const WhichSearch = async () => {
        if (employeeidBody && !employeeid) {
          const saleEmployeeIdFinder = await _SalesSearchSalesData2.default.SearchByemployeeId(employeeidBody);
          return saleEmployeeIdFinder;
        }

        if (!employeeidBody && employeeid) {
          const saleEmployeeIdFinder = await _SalesSearchSalesData2.default.SearchByemployeeId(employeeid);
          return saleEmployeeIdFinder;
        }
      };

      const saleEmployeeIdSearch = await WhichSearch();

      if (!saleEmployeeIdSearch) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (!forListSales && saleEmployeeIdSearch.length < 1) throw new (0, _notFound.NotFound)('Vendas não encontradas');

      if (forListSales === true && saleEmployeeIdSearch.length < 1) {
        return res.status(204).send('Não há vendas cadastradas pelo funcionário');
      }

<<<<<<< HEAD
      const replacedDotPriceObj = _ReplaceDot.ReplaceDot.call(void 0, saleEmployeeIdSearch);

      return res.status(200).json(replacedDotPriceObj);
=======
      return res.status(200).json(saleEmployeeIdSearch);
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
    } catch (err) {
      next(err);
    }
  }

  async SearchByProducts(req, res, next) {
    try {
      const { products } = req.params;

      const saleProductsFinder = await
      _SalesSearchSalesData2.default.SearchByProducts(products);

      if (!saleProductsFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (saleProductsFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(saleProductsFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByDateDashboard(req, res, next) {
    try {
      const { email } = req.headers;
      const { saledateBody } = req.body;
      const empIds = [];
      const registers = [];

      const findEmpByEmail = await _EmployeeSearchCredentials2.default.SearchByEmail(email);

      if (findEmpByEmail.dataValues.boss === null) {
        const findEmpsByBoss = await _EmployeeSearchBoss2.default.SearchByBoss(findEmpByEmail.dataValues.id);

        if (findEmpsByBoss.length > 0) {
          findEmpsByBoss.map((emps) => {
            empIds.push(emps.id);
          });
        }

        empIds.push(findEmpByEmail.dataValues.id);
      } else {
        const findEmpsByBoss = await _EmployeeSearchBoss2.default.SearchByBoss(findEmpByEmail.dataValues.boss);

        findEmpsByBoss.map((emps) => {
          empIds.push(emps.id);
        });

        empIds.push(findEmpByEmail.dataValues.boss);
      }

      for (let i = 0; i < empIds.length; i++) {
        const saleDateFinder = await _SalesSearchSalesData2.default.SearchDateForDashboard(saledateBody, empIds[i]);

        if (!saleDateFinder && saleDateFinder !== 0) throw new (0, _serverErrors.InternalServerError)('Erro interno');

        registers.push(saleDateFinder);
      }

      const registersSum = registers.reduce((ac, cr) => ac + cr, 0);

      return res.status(200).json(registersSum);
    } catch (err) {
      next(err);
    }
  }

  async SearchByDate(req, res, next) {
    try {
      const { date } = req.params;

      const saleDateFinder = await _SalesSearchSalesData2.default.SearchDate(date);

      if (!saleDateFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (saleDateFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(saleDateFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByHour(req, res, next) {
    try {
      const { hour } = req.params;

      const saleHourFinder = await
      _SalesSearchSalesData2.default.SearchByHour(hour);

      if (!saleHourFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
<<<<<<< HEAD

      if (saleHourFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(saleHourFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByPrice(req, res, next) {
    try {
      const { price } = req.params;

      const withDots = _ReplaceDot.InsertDotForSearch.call(void 0, price);

      const salePriceFinder = await _SalesSearchSalesData2.default.SearchByPrice(withDots);

      if (!salePriceFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (salePriceFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      _ReplaceDot.ReplaceDot.call(void 0, salePriceFinder);

      return res.status(200).json(salePriceFinder);
=======
      if (saleHourFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(saleHourFinder);
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new SalesSearchSalesDataController();
