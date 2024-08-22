/* eslint-disable consistent-return */
import InputSearchDates from '../../repositories/Input/InputSearchDates';
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';

class InputSearchDatesController {
  async SearchByEntryDate(req, res, next) {
    try {
      const { entrydate } = req.params;

      const inputEntryDateFinder = await InputSearchDates.SearchByEntryDate(entrydate);

      if (!inputEntryDateFinder) throw new InternalServerError('Erro interno');
      if (inputEntryDateFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputEntryDateFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByExpirationDate(req, res, next) {
    try {
      const { expirationdate } = req.params;

      const inputExpirationDateFinder = await
      InputSearchDates.SearchByExpirationDate(expirationdate);

      if (!inputExpirationDateFinder) throw new InternalServerError('Erro interno');
      if (inputExpirationDateFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputExpirationDateFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputSearchDatesController();
