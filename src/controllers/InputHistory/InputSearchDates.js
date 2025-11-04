/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import InputHistorySearchDates from '../../repositories/InputHistory/InputSearchDates';

class InputHistorySearchDatesController {
  async SearchByExpirationDate(req, res, next) {
    try {
      const { expirationdate } = req.params;

      const inputExpirationDateFinder = await
      InputHistorySearchDates.SearchByExpirationDate(expirationdate);

      if (!inputExpirationDateFinder) throw new InternalServerError('Erro interno');
      if (inputExpirationDateFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputExpirationDateFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputHistorySearchDatesController();
