"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _InputSearchDates = require('../../repositories/Input/InputSearchDates'); var _InputSearchDates2 = _interopRequireDefault(_InputSearchDates);

class InputSearchDatesController {
  async SearchByExpirationDate(req, res, next) {
    try {
      const { expirationdate } = req.params;

      const inputExpirationDateFinder = await
      _InputSearchDates2.default.SearchByExpirationDate(expirationdate);

      if (!inputExpirationDateFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputExpirationDateFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputExpirationDateFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new InputSearchDatesController();
