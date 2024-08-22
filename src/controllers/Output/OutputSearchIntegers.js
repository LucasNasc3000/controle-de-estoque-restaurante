/* eslint-disable consistent-return */
import OutputSearchIntegers from '../../repositories/Output/OutputSearchIntegers';
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';

class OutputSearchIntegersController {
  async SearchByID(req, res, next) {
    try {
      const { id } = req.params;

      const outputIdFinder = await OutputSearchIntegers.SearchByID(id);

      if (!outputIdFinder) throw new NotFound('Saída não encontrada');

      return res.status(200).json(outputIdFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByUnities(req, res, next) {
    try {
      const { unities } = req.params;

      const inputUnitiesFinder = await OutputSearchIntegers.SearchByUnities(unities);

      if (!inputUnitiesFinder) throw new InternalServerError('Erro interno');
      if (inputUnitiesFinder.length < 1) throw new NotFound('Saída não encontrada');

      return res.status(200).json(inputUnitiesFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new OutputSearchIntegersController();
