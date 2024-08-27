"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _SalesSearchClientData = require('../../repositories/Sales/SalesSearchClientData'); var _SalesSearchClientData2 = _interopRequireDefault(_SalesSearchClientData);

class SalesSearchClientDataController {
  async SearchByClientName(req, res, next) {
    try {
      const { clientname } = req.params;

      const saleClientNameFinder = await
      _SalesSearchClientData2.default.SearchByClientName(clientname);

      if (!saleClientNameFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (saleClientNameFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(saleClientNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByAddress(req, res, next) {
    try {
      const { address } = req.params;

      const salesAddressFinder = await _SalesSearchClientData2.default.SearchByAddress(address);

      if (!salesAddressFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (salesAddressFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(salesAddressFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByPhoneNumber(req, res, next) {
    try {
      const { phonenumber } = req.params;

      const employeePhoneNumberFinder = await
      _SalesSearchClientData2.default.SearchByPhoneNumber(phonenumber);

      if (!employeePhoneNumberFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (employeePhoneNumberFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      return res.status(200).json(employeePhoneNumberFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new SalesSearchClientDataController();
