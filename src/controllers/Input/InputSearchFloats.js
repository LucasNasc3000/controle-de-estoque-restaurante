/* eslint-disable consistent-return */
import InputSearchFloats from '../../repositories/Input/InputSearchFloats';
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';

class InputSearchFloatsController {
  async SearchByWeightPerUnit(req, res, next) {
    try {
      const { weightperunit } = req.params;

      const inputWeightPerUnitFinder = await InputSearchFloats.SearchByWeightPerUnit(weightperunit);

      if (!inputWeightPerUnitFinder) throw new InternalServerError('Erro interno');
      if (inputWeightPerUnitFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputWeightPerUnitFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByTotalWeight(req, res, next) {
    try {
      const { totalweight } = req.params;

      const inputTotalWeightFinder = await InputSearchFloats.SearchByTotalWeight(totalweight);

      if (!inputTotalWeightFinder) throw new InternalServerError('Erro interno');
      if (inputTotalWeightFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputTotalWeightFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputSearchFloatsController();
