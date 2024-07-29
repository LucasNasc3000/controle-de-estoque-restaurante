import InputSearchDates from '../../repositories/Input/InputSearchDates';

class InputSearchDatesController {
  async SearchByEntryDate(req, res) {
    const { entrydate } = req.params;

    if (!entrydate) {
      return res.status(500).json({
        errors: ['Data de entrada não informada'],
      });
    }

    const inputEntryDateFinder = await InputSearchDates.SearchByEntryDate(entrydate);

    if (!inputEntryDateFinder) {
      return res.status(400).json({
        errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputEntryDateFinder);
  }

  async SearchByExpirationDate(req, res) {
    const { expirationdate } = req.params;

    if (!expirationdate) {
      return res.status(500).json({
        errors: ['Data de validade não informada'],
      });
    }

    const inputExpirationDateFinder = await InputSearchDates.SearchByExpirationDate(expirationdate);

    if (!inputExpirationDateFinder) {
      return res.status(400).json({
        errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputExpirationDateFinder);
  }
}

export default new InputSearchDatesController();
