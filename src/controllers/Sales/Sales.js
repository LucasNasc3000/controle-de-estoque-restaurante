/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import Decimal from 'decimal.js';
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import Sales from '../../repositories/Sales/Sales';
import { InsertDot, ReplaceDot } from './ReplaceDot';

class SalesController {
  async Store(req, res, next) {
    try {
      const validations = Validation.MainValidations(req.body, false, false, true);
      const salesValidations = Validation.SalesValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (salesValidations !== null) throw new BadRequest(salesValidations);

      const withDots = InsertDot(req.body);

      const newPrice = new Decimal(withDots.price);

      withDots.price = newPrice;

      const salesStore = await Sales.Store(withDots);

      if (!salesStore) throw new InternalServerError('Erro desconhecido');

      ReplaceDot(salesStore);

      return res.status(201).json(salesStore);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;

      const validations = Validation.MainValidations(req.body, false, false, true);
      const salesValidations = Validation.SalesValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (salesValidations !== null) throw new BadRequest(salesValidations);

      const { employee_id, ...allowedData } = req.body;

      const withDots = InsertDot(allowedData);

      const commaFields = [
        'price',
      ];

      commaFields.forEach((element) => {
        if (withDots[element]) {
          const toDecimal = new Decimal(withDots[element]);
          withDots[element] = toDecimal;
        }
      });

      const salesUpdate = await Sales.Update(id, withDots);

      if (salesUpdate === 'Venda não encontrada') throw new BadRequest('Venda não registrada');
      if (!salesUpdate) throw new InternalServerError('Erro desconhecido');

      ReplaceDot(salesUpdate);

      return res.status(200).json(salesUpdate);
    } catch (err) {
      next(err);
    }
  }
}

export default new SalesController();
