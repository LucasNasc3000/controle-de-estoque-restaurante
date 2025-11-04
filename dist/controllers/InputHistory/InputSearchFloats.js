"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _InputSearchFloats = require('../../repositories/InputHistory/InputSearchFloats'); var _InputSearchFloats2 = _interopRequireDefault(_InputSearchFloats);
var _ReplaceDot = require('./ReplaceDot');

class InputHistorySearchFloatsController {
  async SearchByWeightPerUnit(req, res, next) {
    try {
      const { weightperunit } = req.params;

      const withDots = _ReplaceDot.InsertDotForSearch.call(void 0, weightperunit);

      const inputWeightPerUnitFinder = await _InputSearchFloats2.default.SearchByWeightPerUnit(withDots);

      if (!inputWeightPerUnitFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputWeightPerUnitFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      _ReplaceDot.ReplaceDot.call(void 0, inputWeightPerUnitFinder);

      return res.status(200).json(inputWeightPerUnitFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByTotalWeightPerRegister(req, res, next) {
    try {
      const { totalweightPerRegister } = req.params;

      const withDots = _ReplaceDot.InsertDotForSearch.call(void 0, totalweightPerRegister);

      const inputTotalWeightPerRegisterFinder = await
      _InputSearchFloats2.default.SearchByTotalWeightPerRegister(withDots);

      if (!inputTotalWeightPerRegisterFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputTotalWeightPerRegisterFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      _ReplaceDot.ReplaceDot.call(void 0, inputTotalWeightPerRegisterFinder);

      return res.status(200).json(inputTotalWeightPerRegisterFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByPrice(req, res, next) {
    try {
      const { price } = req.params;

      const withDots = _ReplaceDot.InsertDotForSearch.call(void 0, price);

      const salePriceFinder = await _InputSearchFloats2.default.SearchByPrice(withDots);

      if (!salePriceFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (salePriceFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      _ReplaceDot.ReplaceDot.call(void 0, salePriceFinder);

      return res.status(200).json(salePriceFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByTotalPrice(req, res, next) {
    try {
      const { totalprice } = req.params;

      const withDots = _ReplaceDot.InsertDotForSearch.call(void 0, totalprice);

      const saleTotalPriceFinder = await _InputSearchFloats2.default.SearchByTotalPrice(withDots);

      if (!saleTotalPriceFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (saleTotalPriceFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      _ReplaceDot.ReplaceDot.call(void 0, saleTotalPriceFinder);

      return res.status(200).json(saleTotalPriceFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new InputHistorySearchFloatsController();
