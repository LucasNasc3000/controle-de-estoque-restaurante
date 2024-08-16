/* eslint-disable consistent-return */
import InputSearchFloats from '../../repositories/Input/InputSearchFloats';
import { BadRequest } from '../../errors/clientErrors';

class InputSearchFloatsController {
  async SearchByWeightPerUnit(req, res, next) {
    try {
      const { weightperunit } = req.params;

      const inputWeightPerUnitFinder = await InputSearchFloats.SearchByWeightPerUnit(weightperunit);

      if (!inputWeightPerUnitFinder) throw new BadRequest('Insumo não encontrado');

      return res.status(200).json(inputWeightPerUnitFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByTotalWeight(req, res, next) {
    try {
      const { totalweight } = req.params;

      const inputTotalWeightFinder = await InputSearchFloats.SearchByTotalWeight(totalweight);

      if (!inputTotalWeightFinder) throw new BadRequest('Insumo não encontrado');

      return res.status(200).json(inputTotalWeightFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputSearchFloatsController();
