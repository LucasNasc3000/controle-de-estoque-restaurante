/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import InputSearchFloats from '../../repositories/Input/InputSearchFloats';
import { InsertDotForSearch, ReplaceDot } from './ReplaceDot';

class InputSearchFloatsController {
  async SearchByWeightPerUnit(req, res, next) {
    try {
      const { weightperunit } = req.params;

      const withDots = InsertDotForSearch(weightperunit);

      const inputWeightPerUnitFinder = await InputSearchFloats.SearchByWeightPerUnit(withDots);

      if (!inputWeightPerUnitFinder) throw new InternalServerError('Erro interno');
      if (inputWeightPerUnitFinder.length < 1) throw new NotFound('Insumo não encontrado');

      ReplaceDot(inputWeightPerUnitFinder);

      return res.status(200).json(inputWeightPerUnitFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByTotalWeight(req, res, next) {
    try {
      const { totalweight } = req.params;

      const withDots = InsertDotForSearch(totalweight);

      const inputTotalWeightFinder = await InputSearchFloats.SearchByTotalWeight(withDots);

      if (!inputTotalWeightFinder) throw new InternalServerError('Erro interno');
      if (inputTotalWeightFinder.length < 1) throw new NotFound('Insumo não encontrado');

      ReplaceDot(inputTotalWeightFinder);

      return res.status(200).json(inputTotalWeightFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByPrice(req, res, next) {
    try {
      const { price } = req.params;

      const withDots = InsertDotForSearch(price);

      const salePriceFinder = await InputSearchFloats.SearchByPrice(withDots);

      if (!salePriceFinder) throw new InternalServerError('Erro interno');

      if (salePriceFinder.length < 1) throw new NotFound('Insumo não encontrado');

      ReplaceDot(salePriceFinder);

      return res.status(200).json(salePriceFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputSearchFloatsController();
