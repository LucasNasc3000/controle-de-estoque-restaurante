/* eslint-disable consistent-return */
import InputSearchSimpleStrings from '../../repositories/Input/InputSearchSimpleStrings';
import { BadRequest } from '../../errors/clientErrors';

class InputSearchSimpleStringsController {
  async SearchByType(req, res, next) {
    try {
      const { type } = req.params;

      const inputTypeFinder = await InputSearchSimpleStrings.SearchByType(type);

      if (!inputTypeFinder) throw new BadRequest('Insumo não encontrado');

      return res.status(200).json(inputTypeFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByName(req, res, next) {
    try {
      const { name } = req.params;

      const inputNameFinder = await InputSearchSimpleStrings.SearchByName(name);

      if (!inputNameFinder) throw new BadRequest('Insumo não encontrado');

      return res.status(200).json(inputNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchBySupplier(req, res, next) {
    try {
      const { supplier } = req.params;

      const inputSupplierFinder = await InputSearchSimpleStrings.SearchBySupplier(supplier);

      if (!inputSupplierFinder) throw new BadRequest('Insumo não encontrado');

      return res.status(200).json(inputSupplierFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputSearchSimpleStringsController();
