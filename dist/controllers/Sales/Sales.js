"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
/* eslint-disable consistent-return */
var _clientErrors = require('../../errors/clientErrors');
var _serverErrors = require('../../errors/serverErrors');
var _Validation = require('../../middlewares/fieldValidations/Validation'); var _Validation2 = _interopRequireDefault(_Validation);
var _Sales = require('../../repositories/Sales/Sales'); var _Sales2 = _interopRequireDefault(_Sales);

class SalesController {
  async Store(req, res, next) {
    try {
      const validations = _Validation2.default.MainValidations(req.body, false, false, true);
      const salesValidations = _Validation2.default.SalesValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (salesValidations !== null) throw new (0, _clientErrors.BadRequest)(salesValidations);

      const salesStore = await _Sales2.default.Store(req.body);

      if (!salesStore) throw new (0, _serverErrors.InternalServerError)('Erro desconhecido');

      return res.status(201).json(salesStore);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;

      const validations = _Validation2.default.MainValidations(req.body, false, false, true);
      const salesValidations = _Validation2.default.SalesValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (salesValidations !== null) throw new (0, _clientErrors.BadRequest)(salesValidations);

      const { employee_id, ...allowedData } = req.body;

      const salesUpdate = await _Sales2.default.Update(id, allowedData);

      if (salesUpdate === 'venda não encontrada') throw new (0, _clientErrors.BadRequest)('Venda não registrada');
      if (!salesUpdate) throw new (0, _serverErrors.InternalServerError)('Erro desconhecido');

      return res.status(200).json(salesUpdate);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new SalesController();
