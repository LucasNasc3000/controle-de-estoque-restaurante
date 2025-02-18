/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import OutputSearchSimpleStrings from '../../repositories/Output/OutputSearchSimpleStrings';

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
      const { forListOutputs } = req.body;

      const outputEmployeeIdFinder = await OutputSearchSimpleStrings.SearchByEmployeeId(employeeid);

      if (!outputEmployeeIdFinder) throw new InternalServerError('Erro interno');

      if (forListOutputs === true && outputEmployeeIdFinder.length < 1) return;

      if (!forListOutputs && outputEmployeeIdFinder.length < 1) throw new NotFound('Saída não encontrada');

      return res.status(200).json(outputEmployeeIdFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new OutputSearchSimpleStringsController();
