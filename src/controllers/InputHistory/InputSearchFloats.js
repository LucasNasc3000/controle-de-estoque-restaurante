/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import InputSearchFloats from '../../repositories/InputHistory/InputSearchFloats';
import { InsertDotForSearch, ReplaceDot } from './ReplaceDot';

class InputHistorySearchFloatsController {
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

  async SearchByTotalWeightPerRegister(req, res, next) {
    try {
      const { totalweightPerRegister } = req.params;

      const withDots = InsertDotForSearch(totalweightPerRegister);

      const inputTotalWeightPerRegisterFinder = await
      InputSearchFloats.SearchByTotalWeightPerRegister(withDots);

      if (!inputTotalWeightPerRegisterFinder) throw new InternalServerError('Erro interno');
      if (inputTotalWeightPerRegisterFinder.length < 1) throw new NotFound('Insumo não encontrado');

      ReplaceDot(inputTotalWeightPerRegisterFinder);

      return res.status(200).json(inputTotalWeightPerRegisterFinder);
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

  async SearchByTotalPrice(req, res, next) {
    try {
      const { totalprice } = req.params;

      const withDots = InsertDotForSearch(totalprice);

      const saleTotalPriceFinder = await InputSearchFloats.SearchByTotalPrice(withDots);

      if (!saleTotalPriceFinder) throw new InternalServerError('Erro interno');

      if (saleTotalPriceFinder.length < 1) throw new NotFound('Insumo não encontrado');

      ReplaceDot(saleTotalPriceFinder);

      return res.status(200).json(saleTotalPriceFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputHistorySearchFloatsController();
