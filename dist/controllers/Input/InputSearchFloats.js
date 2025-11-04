"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _InputSearchFloats = require('../../repositories/Input/InputSearchFloats'); var _InputSearchFloats2 = _interopRequireDefault(_InputSearchFloats);
var _ReplaceDot = require('./ReplaceDot');

class InputSearchFloatsController {
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

  async SearchByTotalWeight(req, res, next) {
    try {
      const { totalweight } = req.params;

      const withDots = _ReplaceDot.InsertDotForSearch.call(void 0, totalweight);

      const inputTotalWeightFinder = await _InputSearchFloats2.default.SearchByTotalWeight(withDots);

      if (!inputTotalWeightFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputTotalWeightFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      _ReplaceDot.ReplaceDot.call(void 0, inputTotalWeightFinder);

      return res.status(200).json(inputTotalWeightFinder);
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
}

exports. default = new InputSearchFloatsController();
