"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
/* eslint-disable consistent-return */
var _decimaljs = require('decimal.js'); var _decimaljs2 = _interopRequireDefault(_decimaljs);
var _clientErrors = require('../../errors/clientErrors');
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _Validation = require('../../middlewares/fieldValidations/Validation'); var _Validation2 = _interopRequireDefault(_Validation);
var _Input = require('../../repositories/Input/Input'); var _Input2 = _interopRequireDefault(_Input);
var _InputSearchSimpleStrings = require('../../repositories/Input/InputSearchSimpleStrings'); var _InputSearchSimpleStrings2 = _interopRequireDefault(_InputSearchSimpleStrings);
var _Input3 = require('../../repositories/InputHistory/Input'); var _Input4 = _interopRequireDefault(_Input3);
var _ReplaceDot = require('./ReplaceDot');

class InputHistoryController {
  async Store(req, res, next) {
    try {
      const validations = _Validation2.default.MainValidations(req.body);
      const inputValidations = _Validation2.default.InputsValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (inputValidations !== null) throw new (0, _clientErrors.BadRequest)(inputValidations);

      const withDots = _ReplaceDot.InsertDot.call(void 0, req.body);

      const toAddWithDots = [
        'totalweight_per_register',
        'totalprice',
        'totalweight',
      ];

      const commaFields = [
        'weightperunit',
        'price',
      ];

      // Para valores definidos pelo usuário
      commaFields.forEach((element) => {
        const toDecimal = new (0, _decimaljs2.default)(withDots[element]);
        withDots[element] = toDecimal;
      });

      // Para valores adicionados por aqui. Começarão em 0
      toAddWithDots.forEach((element) => {
        withDots[element] = 0;
        const toDecimal = new (0, _decimaljs2.default)(withDots[element]);
        withDots[element] = toDecimal;
      });

      const inputExists = await _InputSearchSimpleStrings2.default.SearchByNameInternal(withDots.name);

      const totalPrice = withDots.price.mul(withDots.quantity);

      withDots.totalprice = totalPrice;

      const totalWeightPerRegister = withDots.weightperunit.mul(withDots.quantity);

      withDots.totalweight_per_register = totalWeightPerRegister;

      withDots.totalweight = totalWeightPerRegister;

      if (inputExists) {
        const inputTotalWeight = new (0, _decimaljs2.default)(inputExists.dataValues.totalweight);

        const totalweightSum = inputTotalWeight.plus(totalWeightPerRegister);

        inputExists.dataValues.totalweight = totalweightSum;

        inputExists.dataValues.quantity += withDots.quantity;

        const inputCurrentUpdate = await
        _Input2.default.Update(inputExists.dataValues.id, inputExists.dataValues);

        if (inputCurrentUpdate === 'Insumo não encontrado') throw new (0, _notFound.NotFound)('Insumo não encontrado no estoque');

        const store = await _Input4.default.Store(withDots);

        if (!store) throw new (0, _serverErrors.InternalServerError)('Erro interno');

        _ReplaceDot.ReplaceDot.call(void 0, store);

        return res.status(200).json(store);
      }

      const {
        totalweight_per_register, totalprice, reason, ...rest
      } = withDots;

      await _Input2.default.Store(rest);

      const store = await _Input4.default.Store(withDots);

      if (!store) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      _ReplaceDot.ReplaceDot.call(void 0, store);

      return res.status(200).json(store);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new InputHistoryController();
