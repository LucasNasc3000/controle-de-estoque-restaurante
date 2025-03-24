"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable max-len */
/* eslint-disable consistent-return */
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _InputSearchSimpleStrings = require('../../repositories/Input/InputSearchSimpleStrings'); var _InputSearchSimpleStrings2 = _interopRequireDefault(_InputSearchSimpleStrings);

class InputSearchSimpleStringsController {
  async SearchByType(req, res, next) {
    try {
      const { type } = req.params;

      const inputTypeFinder = await _InputSearchSimpleStrings2.default.SearchByType(type);

      if (!inputTypeFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputTypeFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputTypeFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByName(req, res, next) {
    try {
      const { name } = req.params;

      const inputNameFinder = await _InputSearchSimpleStrings2.default.SearchByNameForUsers(name);

      if (!inputNameFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputNameFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchBySupplier(req, res, next) {
    try {
      const { supplier } = req.params;

      const inputSupplierFinder = await _InputSearchSimpleStrings2.default.SearchBySupplier(supplier);

      if (!inputSupplierFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (inputSupplierFinder.length < 1) throw new (0, _notFound.NotFound)('Insumo não encontrado');

      return res.status(200).json(inputSupplierFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmployeeId(req, res, next) {
    try {
      const { employeeid } = req.params;
      const { forListInputs, employeeidBody } = req.body;

      const WhichSearch = async () => {
        if (employeeidBody && !employeeid) {
          const inputEmployeeIdFinder = await _InputSearchSimpleStrings2.default.SearchByEmployeeId(employeeidBody);
          return inputEmployeeIdFinder;
        }

        if (!employeeidBody && employeeid) {
          const inputEmployeeIdFinder = await _InputSearchSimpleStrings2.default.SearchByEmployeeId(employeeid);
          return inputEmployeeIdFinder;
        }
      };

      const inputEmployeeIdSearch = await WhichSearch();

      if (!inputEmployeeIdSearch) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (!forListInputs && inputEmployeeIdSearch.length < 1) throw new (0, _notFound.NotFound)('Insumos não encontrados');

      if (forListInputs === true && inputEmployeeIdSearch.length < 1) {
        return res.status(204).send('Não há insumos cadastrados pelo funcionário');
      }

      return res.status(200).json(inputEmployeeIdSearch);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new InputSearchSimpleStringsController();
