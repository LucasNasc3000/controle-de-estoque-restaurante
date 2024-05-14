import OutputSearchIntegers from "../../repositories/Output/OutputSearchIntegers";

class OutputSearchIntegersController {
  async SearchByID(req, res) {
    const { id } = req.params;

    if(!id) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputIdFinder = await OutputSearchIntegers.SearchByID(id);

    if(!outputIdFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(outputIdFinder);
  }

  async SearchByUnities(req, res) {
    const { unities } = req.params;

    if(!unities) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputUnitiesFinder = await OutputSearchIntegers.SearchByUnities(unities);

    if(!inputUnitiesFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputUnitiesFinder);
  }
}

export default new OutputSearchIntegersController();
