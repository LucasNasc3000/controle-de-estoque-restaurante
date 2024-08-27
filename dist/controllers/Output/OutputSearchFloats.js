"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _OutputSearchFloats = require('../../repositories/Output/OutputSearchFloats'); var _OutputSearchFloats2 = _interopRequireDefault(_OutputSearchFloats);
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');

class OutputSearchFloatsController {
  async SearchByWeight(req, res, next) {
    try {
      const { weight } = req.params;

      const outputWeightFinder = await _OutputSearchFloats2.default.SearchByWeight(weight);

      if (!outputWeightFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (outputWeightFinder.length < 1) throw new (0, _notFound.NotFound)('Saída não encontrada');

      return res.status(200).json(outputWeightFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new OutputSearchFloatsController();
