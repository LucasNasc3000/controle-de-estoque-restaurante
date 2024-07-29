import InputSearchFloats from '../../repositories/Input/InputSearchFloats';

class InputSearchFloatsController {
  async SearchByWeightPerUnit(req, res) {
    const { weightperunit } = req.params;

    if (!weightperunit) {
      return res.status(500).json({
        errors: ['Peso por unidade não informado'],
      });
    }

    const inputWeightPerUnitFinder = await InputSearchFloats.SearchByWeightPerUnit(weightperunit);

    if (!inputWeightPerUnitFinder) {
      return res.status(400).json({
        errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputWeightPerUnitFinder);
  }

  async SearchByTotalWeight(req, res) {
    const { totalweight } = req.params;

    if (!totalweight) {
      return res.status(500).json({
        errors: ['Peso total não informado'],
      });
    }

    const inputTotalWeightFinder = await InputSearchFloats.SearchByTotalWeight(totalweight);

    if (!inputTotalWeightFinder) {
      return res.status(400).json({
        errors: ['Insumo não encontrado'],
      });
    }

    return res.json(inputTotalWeightFinder);
  }
}

export default new InputSearchFloatsController();
