/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import Decimal from 'decimal.js';
import { BadRequest } from '../../errors/clientErrors';
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import InputCurrentMethods from '../../repositories/Input/Input';
import InputCurrentSearchSimpleStrings from '../../repositories/Input/InputSearchSimpleStrings';
import InputHistory from '../../repositories/InputHistory/Input';
import { InsertDot, ReplaceDot } from './ReplaceDot';

class InputHistoryController {
  async Store(req, res, next) {
    try {
      const validations = Validation.MainValidations(req.body);
      const inputValidations = Validation.InputsValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (inputValidations !== null) throw new BadRequest(inputValidations);

      const withDots = InsertDot(req.body);

      const toAddWithDots = [
        'totalweight_per_register',
        'totalprice',
        'totalweight',
      ];

      const commaFields = [
        'weightperunit',
        'price',
      ];

      // Para valores definidos pelo usuário
      commaFields.forEach((element) => {
        const toDecimal = new Decimal(withDots[element]);
        withDots[element] = toDecimal;
      });

      // Para valores adicionados por aqui. Começarão em 0
      toAddWithDots.forEach((element) => {
        withDots[element] = 0;
        const toDecimal = new Decimal(withDots[element]);
        withDots[element] = toDecimal;
      });

      const inputExists = await InputCurrentSearchSimpleStrings.SearchByNameInternal(withDots.name);

      const totalPrice = withDots.price.mul(withDots.quantity);

      withDots.totalprice = totalPrice;

      const totalWeightPerRegister = withDots.weightperunit.mul(withDots.quantity);

      withDots.totalweight_per_register = totalWeightPerRegister;

      withDots.totalweight = totalWeightPerRegister;

      if (inputExists) {
        const inputTotalWeight = new Decimal(inputExists.dataValues.totalweight);

        const totalweightSum = inputTotalWeight.plus(totalWeightPerRegister);

        inputExists.dataValues.totalweight = totalweightSum;

        inputExists.dataValues.quantity += withDots.quantity;

        const inputCurrentUpdate = await
        InputCurrentMethods.Update(inputExists.dataValues.id, inputExists.dataValues);

        if (inputCurrentUpdate === 'Insumo não encontrado') throw new NotFound('Insumo não encontrado no estoque');

        const store = await InputHistory.Store(withDots);

        if (!store) throw new InternalServerError('Erro interno');

        ReplaceDot(store);

        return res.status(200).json(store);
      }

      const {
        totalweight_per_register, totalprice, reason, ...rest
      } = withDots;

      await InputCurrentMethods.Store(rest);

      const store = await InputHistory.Store(withDots);

      if (!store) throw new InternalServerError('Erro interno');

      ReplaceDot(store);

      return res.status(200).json(store);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputHistoryController();
