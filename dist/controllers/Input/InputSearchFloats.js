"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _InputSearchFloats = require('../../repositories/Input/InputSearchFloats'); var _InputSearchFloats2 = _interopRequireDefault(_InputSearchFloats);
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');

class InputSearchFloatsController {
  async SearchByWeightPerUnit(req, res, next) {
    try {
      const { weightperunit } = req.params;

      const inputWeightPerUnitFinder = await _InputSearchFloats2.default.SearchByWeightPerUnit(weightperunit);

      if (!inputWeightPerUnitFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputWeightPerUnitFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputWeightPerUnitFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByTotalWeight(req, res, next) {
    try {
      const { totalweight } = req.params;

      const inputTotalWeightFinder = await _InputSearchFloats2.default.SearchByTotalWeight(totalweight);

      if (!inputTotalWeightFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputTotalWeightFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputTotalWeightFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new InputSearchFloatsController();
