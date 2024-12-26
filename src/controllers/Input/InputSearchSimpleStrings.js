/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import InputSearchSimpleStrings from '../../repositories/Input/InputSearchSimpleStrings';

class InputSearchSimpleStringsController {
  async SearchByType(req, res, next) {
    try {
      const { type } = req.params;

      const inputTypeFinder = await InputSearchSimpleStrings.SearchByType(type);

      if (!inputTypeFinder) throw new InternalServerError('Erro interno');
      if (inputTypeFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputTypeFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByName(req, res, next) {
    try {
      const { name } = req.params;

      const inputNameFinder = await InputSearchSimpleStrings.SearchByName(name);

      if (!inputNameFinder) throw new InternalServerError('Erro interno');
      if (inputNameFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchBySupplier(req, res, next) {
    try {
      const { supplier } = req.params;

      const inputSupplierFinder = await InputSearchSimpleStrings.SearchBySupplier(supplier);

      if (!inputSupplierFinder) throw new InternalServerError('Erro interno');
      if (inputSupplierFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputSupplierFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmployeeId(req, res, next) {
    try {
      const { employeeid } = req.params;

      const inputEmployeeIdFinder = await InputSearchSimpleStrings.SearchByEmployeeId(employeeid);

      if (!inputEmployeeIdFinder) throw new InternalServerError('Erro interno');

      return res.status(200).json(inputEmployeeIdFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputSearchSimpleStringsController();
