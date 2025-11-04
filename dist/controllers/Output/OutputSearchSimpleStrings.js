"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable max-len */
/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _OutputSearchSimpleStrings = require('../../repositories/Output/OutputSearchSimpleStrings'); var _OutputSearchSimpleStrings2 = _interopRequireDefault(_OutputSearchSimpleStrings);
var _ReplaceDot = require('./ReplaceDot');

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
      const { forListOutputs, employeeidBody } = req.body;

      const WhichSearch = async () => {
        if (employeeidBody && !employeeid) {
          const outputEmployeeIdFinder = await _OutputSearchSimpleStrings2.default.SearchByEmployeeId(employeeidBody);
          return outputEmployeeIdFinder;
        }

        if (!employeeidBody && employeeid) {
          const outputEmployeeIdFinder = await _OutputSearchSimpleStrings2.default.SearchByEmployeeId(employeeid);
          return outputEmployeeIdFinder;
        }
      };

      const outputEmployeeIdSearch = await WhichSearch();

      if (!outputEmployeeIdSearch) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (!forListOutputs && outputEmployeeIdSearch.length < 1) throw new (0, _notFound.NotFound)('Saídas não encontradas');

      if (forListOutputs === true && outputEmployeeIdSearch.length < 1) {
        return res.status(204).send('Não há saídas cadastradas pelo funcionário');
      }

      return res.status(200).json(outputEmployeeIdSearch);
    } catch (err) {
      next(err);
    }
  }

  async SearchByReason(req, res, next) {
    try {
      const { reason } = req.params;

      const withDots = _ReplaceDot.InsertDotForSearch.call(void 0, reason);

      const saleReasonFinder = await _OutputSearchSimpleStrings2.default.SearchByReason(withDots);

      if (!saleReasonFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (saleReasonFinder.length < 1) throw new (0, _notFound.NotFound)('Venda não encontrada');

      _ReplaceDot.ReplaceDot.call(void 0, saleReasonFinder);

      return res.status(200).json(saleReasonFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new OutputSearchSimpleStringsController();
