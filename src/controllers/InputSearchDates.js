import InputSearchDates from "../repositories/InputSearchDates";

class InputSearchDatesController {
  async SearchByEntryDate(req, res) {
    const { entrydate } = req.params;

    if(!entrydate) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputEntryDateFinder = await InputSearchDates.SearchByEntryDate(entrydate);

    if(!inputEntryDateFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputEntryDateFinder);
  }

  async SearchByExpirationDate(req, res) {
    const { expirationdate } = req.params;

    if(!expirationdate) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputExpirationDateFinder = await InputSearchDates.SearchByExpirationDate(expirationdate);

    if(!inputExpirationDateFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputExpirationDateFinder);
  }
}

export default new InputSearchDatesController();
