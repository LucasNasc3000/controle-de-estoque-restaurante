import InputSearchFloats from "../../repositories/Input/InputSearchFloats";

class InputSearchFloatsController {
  async SearchByWeightPerUnit(req, res) {
    const { weightperunit } = req.params;

    if(!weightperunit) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputWeightPerUnitFinder = await InputSearchFloats.SearchByWeightPerUnit(weightperunit);

    if(!inputWeightPerUnitFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputWeightPerUnitFinder);
  }

  async SearchByTotalWeight(req, res) {
    const { totalweight } = req.params;

    if(!totalweight) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputTotalWeightFinder = await InputSearchFloats.SearchByTotalWeight(totalweight);

    if(!inputTotalWeightFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputTotalWeightFinder);
  }
}

export default new InputSearchFloatsController();
