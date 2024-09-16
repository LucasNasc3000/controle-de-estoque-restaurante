"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _OutputSearchSimpleStrings = require('../../repositories/Output/OutputSearchSimpleStrings'); var _OutputSearchSimpleStrings2 = _interopRequireDefault(_OutputSearchSimpleStrings);

class OutputSearchSimpleStringsController {
  async SearchByType(req, res, next) {
    try {
      const { type } = req.params;

      const outputTypeFinder = await _OutputSearchSimpleStrings2.default.SearchByType(type);

      if (!outputTypeFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (outputTypeFinder.length < 1) throw new (0, _notFound.NotFound)('Saída não encontrada');

      return res.status(200).json(outputTypeFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByName(req, res, next) {
    try {
      const { name } = req.params;

      const outputNameFinder = await _OutputSearchSimpleStrings2.default.SearchByName(name);

      if (!outputNameFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (outputNameFinder.length < 1) throw new (0, _notFound.NotFound)('Saída não encontrada');

      return res.status(200).json(outputNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmployeeId(req, res, next) {
    try {
      const { employeeid } = req.params;

      const outputEmployeeIdFinder = await _OutputSearchSimpleStrings2.default.SearchByEmployeeId(employeeid);

      if (!outputEmployeeIdFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (outputEmployeeIdFinder.length < 1) throw new (0, _notFound.NotFound)('Saída não encontrada');

      return res.status(200).json(outputEmployeeIdFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new OutputSearchSimpleStringsController();
