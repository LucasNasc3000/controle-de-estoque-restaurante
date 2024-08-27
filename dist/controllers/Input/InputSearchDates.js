"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _InputSearchDates = require('../../repositories/Input/InputSearchDates'); var _InputSearchDates2 = _interopRequireDefault(_InputSearchDates);
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');

class InputSearchDatesController {
  async SearchByEntryDate(req, res, next) {
    try {
      const { entrydate } = req.params;

      const inputEntryDateFinder = await _InputSearchDates2.default.SearchByEntryDate(entrydate);

      if (!inputEntryDateFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputEntryDateFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputEntryDateFinder);
    } catch (err) {
      next(err);
    }
  }

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
