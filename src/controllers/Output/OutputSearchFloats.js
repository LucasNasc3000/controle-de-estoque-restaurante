/* eslint-disable consistent-return */
import OutputSearchFloats from '../../repositories/Output/OutputSearchFloats';
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';

class OutputSearchFloatsController {
  async SearchByWeight(req, res, next) {
    try {
      const { weight } = req.params;

      const outputWeightFinder = await OutputSearchFloats.SearchByWeight(weight);

      if (!outputWeightFinder) throw new InternalServerError('Erro interno');
      if (outputWeightFinder.length < 1) throw new NotFound('Saída não encontrada');

      return res.status(200).json(outputWeightFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new OutputSearchFloatsController();
