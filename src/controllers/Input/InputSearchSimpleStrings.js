import InputSearchSimpleStrings from "../../repositories/Input/InputSearchSimpleStrings";

class InputSearchSimpleStringsController {

  async SearchByType(req, res) {
    const { type } = req.params;

    if(!type) {
      return res.status(500).json({
        errors: ['Tipo não informado'],
      });
    }

    const inputTypeFinder = await InputSearchSimpleStrings.SearchByType(type);

    if(!inputTypeFinder) {
      return res.status(400).json({
          errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputTypeFinder);
  }

  async SearchByName(req, res) {
    const { name } = req.params;

    if(!name) {
      return res.status(500).json({
        errors: ['Nome não informado'],
      });
    }

    const inputNameFinder = await InputSearchSimpleStrings.SearchByName(name);

    if(!inputNameFinder) {
      return res.status(400).json({
          errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputNameFinder);
  }

  async SearchBySupplier(req, res) {
    const { supplier } = req.params;

    if(!supplier) {
      return res.status(500).json({
        errors: ['Fornecedor não informado'],
      });
    }

    const inputSupplierFinder = await InputSearchSimpleStrings.SearchBySupplier(supplier);

    if(!inputSupplierFinder) {
      return res.status(400).json({
          errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputSupplierFinder);
  }

}

export default new InputSearchSimpleStringsController();
