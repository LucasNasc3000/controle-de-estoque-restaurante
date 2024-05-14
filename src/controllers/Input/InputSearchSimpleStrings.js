import InputSearchSimpleStrings from "../../repositories/Input/InputSearchSimpleStrings";

class InputSearchSimpleStringsController {

  async SearchByType(req, res) {
    const { type } = req.params;

    if(!type) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputTypeFinder = await InputSearchSimpleStrings.SearchByType(type);

    if(!inputTypeFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputTypeFinder);
  }

  async SearchByName(req, res) {
    const { name } = req.params;

    if(!name) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputNameFinder = await InputSearchSimpleStrings.SearchByName(name);

    if(!inputNameFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputNameFinder);
  }

  async SearchBySupplier(req, res) {
    const { supplier } = req.params;

    if(!supplier) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputSupplierFinder = await InputSearchSimpleStrings.SearchBySupplier(supplier);

    if(!inputSupplierFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputSupplierFinder);
  }

}

export default new InputSearchSimpleStringsController();
