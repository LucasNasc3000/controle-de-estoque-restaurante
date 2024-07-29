import InputSearchIntegers from '../../repositories/Input/InputSearchIntegers';

class InputSearchIntegersController {
  async SearchByID(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputIDFinder = await InputSearchIntegers.SearchByID(id);

    if (!inputIDFinder) {
      return res.status(400).json({
        errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputIDFinder);
  }

  async SearchByQuantity(req, res) {
    const { quantity } = req.params;

    if (!quantity) {
      return res.status(500).json({
        errors: ['Quantidade não informada'],
      });
    }

    const inputQuantityFinder = await InputSearchIntegers.SearchByQuantity(quantity);

    if (!inputQuantityFinder) {
      return res.status(400).json({
        errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputQuantityFinder);
  }

  async SearchByMinimunQuantity(req, res) {
    const { minimunquantity } = req.params;

    if (!minimunquantity) {
      return res.status(500).json({
        errors: ['Quantidade não informada'],
      });
    }

    const inputQuantityFinder = await InputSearchIntegers.SearchByMinimunQuantity(minimunquantity);

    if (!inputQuantityFinder) {
      return res.status(400).json({
        errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputQuantityFinder);
  }
}

export default new InputSearchIntegersController();
