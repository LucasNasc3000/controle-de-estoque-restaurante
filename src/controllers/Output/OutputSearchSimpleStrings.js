import OutputSearchSimpleStrings from "../../repositories/Output/OutputSearchSimpleStrings";

class OutputSearchSimpleStringsController {

  async SearchByType(req, res) {
    const { type } = req.params;

    if(!type) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputTypeFinder = await OutputSearchSimpleStrings.SearchByType(type);

    if(!outputTypeFinder) {
      return res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(outputTypeFinder);
  }

  async SearchByName(req, res) {
    const { name } = req.params;

    if(!name) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputNameFinder = await OutputSearchSimpleStrings.SearchByName(name);

    if(!outputNameFinder) {
      return res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(outputNameFinder);
  }
}

export default new OutputSearchSimpleStringsController();
