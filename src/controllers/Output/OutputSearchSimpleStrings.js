/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import OutputSearchSimpleStrings from '../../repositories/Output/OutputSearchSimpleStrings';
import { InsertDotForSearch, ReplaceDot } from './ReplaceDot';

class OutputSearchSimpleStringsController {
  async SearchByType(req, res, next) {
    try {
      const { type } = req.params;

      const outputTypeFinder = await OutputSearchSimpleStrings.SearchByType(type);

      if (!outputTypeFinder) throw new InternalServerError('Erro interno');
      if (outputTypeFinder.length < 1) throw new NotFound('Saída não encontrada');

      return res.status(200).json(outputTypeFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByName(req, res, next) {
    try {
      const { name } = req.params;

      const outputNameFinder = await OutputSearchSimpleStrings.SearchByName(name);

      if (!outputNameFinder) throw new InternalServerError('Erro interno');
      if (outputNameFinder.length < 1) throw new NotFound('Saída não encontrada');

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
          const outputEmployeeIdFinder = await OutputSearchSimpleStrings.SearchByEmployeeId(employeeidBody);
          return outputEmployeeIdFinder;
        }

        if (!employeeidBody && employeeid) {
          const outputEmployeeIdFinder = await OutputSearchSimpleStrings.SearchByEmployeeId(employeeid);
          return outputEmployeeIdFinder;
        }
      };

      const outputEmployeeIdSearch = await WhichSearch();

      if (!outputEmployeeIdSearch) throw new InternalServerError('Erro interno');

      if (!forListOutputs && outputEmployeeIdSearch.length < 1) throw new NotFound('Saídas não encontradas');

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

      const withDots = InsertDotForSearch(reason);

      const saleReasonFinder = await OutputSearchSimpleStrings.SearchByReason(withDots);

      if (!saleReasonFinder) throw new InternalServerError('Erro interno');

      if (saleReasonFinder.length < 1) throw new NotFound('Venda não encontrada');

      ReplaceDot(saleReasonFinder);

      return res.status(200).json(saleReasonFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new OutputSearchSimpleStringsController();
