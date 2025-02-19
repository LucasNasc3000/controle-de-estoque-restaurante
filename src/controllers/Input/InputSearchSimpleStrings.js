/* eslint-disable max-len */
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

      const inputNameFinder = await InputSearchSimpleStrings.SearchByNameForUsers(name);

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
      const { forListInputs, employeeidBody } = req.body;

      const WhichSearch = async () => {
        if (employeeidBody && !employeeid) {
          const inputEmployeeIdFinder = await InputSearchSimpleStrings.SearchByEmployeeId(employeeidBody);
          return inputEmployeeIdFinder;
        }

        if (!employeeidBody && employeeid) {
          const inputEmployeeIdFinder = await InputSearchSimpleStrings.SearchByEmployeeId(employeeid);
          return inputEmployeeIdFinder;
        }
      };

      const inputEmployeeIdSearch = await WhichSearch();

      if (!inputEmployeeIdSearch) throw new InternalServerError('Erro interno');

      if (!forListInputs && inputEmployeeIdSearch.length < 1) throw new NotFound('Insumos não encontrados');

      if (forListInputs === true && inputEmployeeIdSearch.length < 1) {
        return res.status(204).send('Não há insumos cadastrados pelo funcionário');
      }

      return res.status(200).json(inputEmployeeIdSearch);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputSearchSimpleStringsController();
