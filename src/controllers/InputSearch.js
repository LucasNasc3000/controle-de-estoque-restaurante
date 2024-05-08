import InputSearchIntegers from "../repositories/InputSearchIntegers";
import InputSearchFloats from "../repositories/InputSearchFloats";
import InputSearchDates from "../repositories/InputSearchDates";
import InputSearchSimpleStrings from "../repositories/InputSearchSimpleStrings";

class InputSearchController {
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
    const { totalWeight } = req.params;

    if(!totalWeight) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputTotalWeightFinder = await InputSearchFloats.SearchByTotalWeight(totalWeight);

    if(!inputTotalWeightFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputTotalWeightFinder);
  }
}

export default new InputSearchController();
