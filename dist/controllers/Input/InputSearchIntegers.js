"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _InputSearchIntegers = require('../../repositories/Input/InputSearchIntegers'); var _InputSearchIntegers2 = _interopRequireDefault(_InputSearchIntegers);

class InputSearchIntegersController {
  async SearchByID(req, res, next) {
    try {
      const { id } = req.params;

      const inputIDFinder = await _InputSearchIntegers2.default.SearchByID(id);

      if (!inputIDFinder) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputIDFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByQuantity(req, res, next) {
    try {
      const { quantity } = req.params;

      const inputQuantityFinder = await _InputSearchIntegers2.default.SearchByQuantity(quantity);

      if (!inputQuantityFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputQuantityFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputQuantityFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByMinimunQuantity(req, res, next) {
    try {
      const { minimunquantity } = req.params;

      const inputQuantityFinder = await
      _InputSearchIntegers2.default.SearchByMinimunQuantity(minimunquantity);

      if (!inputQuantityFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputQuantityFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputQuantityFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new InputSearchIntegersController();
