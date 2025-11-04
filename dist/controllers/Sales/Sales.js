"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
/* eslint-disable consistent-return */
<<<<<<< HEAD
var _decimaljs = require('decimal.js'); var _decimaljs2 = _interopRequireDefault(_decimaljs);
=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
var _clientErrors = require('../../errors/clientErrors');
var _serverErrors = require('../../errors/serverErrors');
var _Validation = require('../../middlewares/fieldValidations/Validation'); var _Validation2 = _interopRequireDefault(_Validation);
var _Sales = require('../../repositories/Sales/Sales'); var _Sales2 = _interopRequireDefault(_Sales);
<<<<<<< HEAD
var _ReplaceDot = require('./ReplaceDot');
=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9

class SalesController {
  async Store(req, res, next) {
    try {
      const validations = _Validation2.default.MainValidations(req.body, false, false, true);
      const salesValidations = _Validation2.default.SalesValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (salesValidations !== null) throw new (0, _clientErrors.BadRequest)(salesValidations);

      const withDots = _ReplaceDot.InsertDot.call(void 0, req.body);

      const newPrice = new (0, _decimaljs2.default)(withDots.price);

      withDots.price = newPrice;

      const salesStore = await _Sales2.default.Store(withDots);

      if (!salesStore) throw new (0, _serverErrors.InternalServerError)('Erro desconhecido');

      _ReplaceDot.ReplaceDot.call(void 0, salesStore);

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
<<<<<<< HEAD
=======

      const salesUpdate = await _Sales2.default.Update(id, allowedData);
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9

      const withDots = _ReplaceDot.InsertDot.call(void 0, allowedData);

      const commaFields = [
        'price',
      ];

      commaFields.forEach((element) => {
        if (withDots[element]) {
          const toDecimal = new (0, _decimaljs2.default)(withDots[element]);
          withDots[element] = toDecimal;
        }
      });

      const salesUpdate = await _Sales2.default.Update(id, withDots);

      if (salesUpdate === 'Venda não encontrada') throw new (0, _clientErrors.BadRequest)('Venda não registrada');
      if (!salesUpdate) throw new (0, _serverErrors.InternalServerError)('Erro desconhecido');

      _ReplaceDot.ReplaceDot.call(void 0, salesUpdate);

      return res.status(200).json(salesUpdate);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new SalesController();
