import OutputSearchFloats from "../../repositories/Output/OutputSearchFloats";

class OutputSearchFloatsController {
  async SearchByWeight(req, res) {
    const { weight } = req.params;

    if(!weight) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputWeightFinder = await OutputSearchFloats.SearchByWeight(weight);

    if(!outputWeightFinder) {
      return res.status(400).json({
          errors: ['Saída não encontrado'],
      });
    }

    return res.json(outputWeightFinder);
  }
}

export default new OutputSearchFloatsController();
