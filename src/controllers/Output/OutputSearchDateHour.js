/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import OutputSearchDateHour from '../../repositories/Output/OutputSearchDateHour';

class OutputSearchDateHourController {
  async SearchByDate(req, res, next) {
    try {
      const { date } = req.params;

      const outputDateFinder = await OutputSearchDateHour.SearchByDate(date);

      if (!outputDateFinder) throw new InternalServerError('Erro interno');
      if (outputDateFinder.length < 1) throw new NotFound('Saída não encontrada');

      return res.status(200).json(outputDateFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByHour(req, res, next) {
    try {
      const { hour } = req.params;

      const outputHourFinder = await OutputSearchDateHour.SearchByHour(hour);

      if (!outputHourFinder) throw new InternalServerError('Erro interno');
      if (outputHourFinder.length < 1) throw new NotFound('Saída não encontrada');

      return res.status(200).json(outputHourFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new OutputSearchDateHourController();
