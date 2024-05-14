import OutputSearchSimpleStrings from "../../repositories/Output/OutputSearchSimpleStrings";

class OutputSearchSimpleStringsController {

  async SearchByType(req, res) {
    const { type } = req.params;

    if(!type) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputTypeFinder = await OutputSearchSimpleStrings.SearchByType(type);

    if(!outputTypeFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(outputTypeFinder);
  }

  async SearchByName(req, res) {
    const { name } = req.params;

    if(!name) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputNameFinder = await OutputSearchSimpleStrings.SearchByName(name);

    if(!outputNameFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(outputNameFinder);
  }
}

export default new OutputSearchSimpleStringsController();
