"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _OutputSearchDateHour = require('../../repositories/Output/OutputSearchDateHour'); var _OutputSearchDateHour2 = _interopRequireDefault(_OutputSearchDateHour);
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');

class OutputSearchDateHourController {
  async SearchByDate(req, res, next) {
    try {
      const { date } = req.params;

      const outputDateFinder = await _OutputSearchDateHour2.default.SearchByDate(date);

      if (!outputDateFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (outputDateFinder.length < 1) throw new (0, _notFound.NotFound)('Saída não encontrada');

      return res.status(200).json(outputDateFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByHour(req, res, next) {
    try {
      const { hour } = req.params;

      const outputHourFinder = await _OutputSearchDateHour2.default.SearchByHour(hour);

      if (!outputHourFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (outputHourFinder.length < 1) throw new (0, _notFound.NotFound)('Saída não encontrada');

      return res.status(200).json(outputHourFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new OutputSearchDateHourController();
