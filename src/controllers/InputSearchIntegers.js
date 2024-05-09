import InputSearchIntegers from "../repositories/InputSearchIntegers";

class InputSearchIntegersController {
  async SearchByID(req, res) {
    const { id } = req.params;

    if(!id) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputIDFinder = await InputSearchIntegers.SearchByID(id);

    if(!inputIDFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputIDFinder);
  }

  async SearchByQuantity(req, res) {
    const { quantity } = req.params;

    if(!quantity) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputQuantityFinder = await InputSearchIntegers.SearchByQuantity(quantity);

    if(!inputQuantityFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputQuantityFinder);
  }
}

export default new InputSearchIntegersController();
