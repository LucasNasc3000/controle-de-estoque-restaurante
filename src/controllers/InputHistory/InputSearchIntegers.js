/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import InputHistorySearchIntegers from '../../repositories/InputHistory/InputSearchIntegers';

class InputHistorySearchIntegersController {
  async SearchByID(req, res, next) {
    try {
      const { id } = req.params;

      const inputIDFinder = await InputHistorySearchIntegers.SearchByID(id);

      if (!inputIDFinder) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputIDFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByQuantity(req, res, next) {
    try {
      const { quantity } = req.params;

      const inputQuantityFinder = await InputHistorySearchIntegers.SearchByQuantity(quantity);

      if (!inputQuantityFinder) throw new InternalServerError('Erro interno');
      if (inputQuantityFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputQuantityFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByMinimunQuantity(req, res, next) {
    try {
      const { minimunquantity } = req.params;

      const inputQuantityFinder = await
      InputHistorySearchIntegers.SearchByMinimunQuantity(minimunquantity);

      if (!inputQuantityFinder) throw new InternalServerError('Erro interno');
      if (inputQuantityFinder.length < 1) throw new NotFound('Insumo não encontrado');

      return res.status(200).json(inputQuantityFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputHistorySearchIntegersController();
