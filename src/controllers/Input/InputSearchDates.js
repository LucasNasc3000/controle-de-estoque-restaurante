/* eslint-disable consistent-return */
import InputSearchDates from '../../repositories/Input/InputSearchDates';
import { BadRequest } from '../../errors/clientErrors';

class InputSearchDatesController {
  async SearchByEntryDate(req, res, next) {
    try {
      const { entrydate } = req.params;

      const inputEntryDateFinder = await InputSearchDates.SearchByEntryDate(entrydate);

      if (!inputEntryDateFinder) throw new BadRequest('Insumo não encontrado');

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

      if (!inputExpirationDateFinder) throw new BadRequest('Insumo não encontrado');

      return res.status(200).json(inputExpirationDateFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputSearchDatesController();
