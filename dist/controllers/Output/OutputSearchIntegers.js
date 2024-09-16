"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _OutputSearchIntegers = require('../../repositories/Output/OutputSearchIntegers'); var _OutputSearchIntegers2 = _interopRequireDefault(_OutputSearchIntegers);
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');

class OutputSearchIntegersController {
  async SearchByID(req, res, next) {
    try {
      const { id } = req.params;

      const outputIdFinder = await _OutputSearchIntegers2.default.SearchByID(id);

      if (!outputIdFinder) throw new (0, _notFound.NotFound)('Saída não encontrada');

      return res.status(200).json(outputIdFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByUnities(req, res, next) {
    try {
      const { unities } = req.params;

      const inputUnitiesFinder = await _OutputSearchIntegers2.default.SearchByUnities(unities);

      if (!inputUnitiesFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputUnitiesFinder.length < 1) throw new (0, _notFound.NotFound)('Saída não encontrada');

      return res.status(200).json(inputUnitiesFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new OutputSearchIntegersController();
