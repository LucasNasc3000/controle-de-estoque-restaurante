import OutputSearchFloats from "../../repositories/Output/OutputSearchFloats";

class OutputSearchFloatsController {
  async SearchByWeightPerUnit(req, res) {
    const { weightperunit } = req.params;

    if(!weightperunit) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputWeightPerUnitFinder = await OutputSearchFloats.SearchByWeightPerUnit(weightperunit);

    if(!inputWeightPerUnitFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputWeightPerUnitFinder);
  }

  async SearchByWeight(req, res) {
    const { weight } = req.params;

    if(!weight) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputWeightFinder = await OutputSearchFloats.SearchByWeight(weight);

    if(!outputWeightFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(outputWeightFinder);
  }
}

export default new OutputSearchFloatsController();
