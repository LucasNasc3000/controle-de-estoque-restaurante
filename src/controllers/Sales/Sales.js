/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import Sales from '../../repositories/Sales/Sales';

class SalesController {
  async Store(req, res, next) {
    try {
      const validations = Validation.MainValidations(req.body, false, false, true);
      const salesValidations = Validation.SalesValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (salesValidations !== null) throw new BadRequest(salesValidations);

      const salesStore = await Sales.Store(req.body);

      if (!salesStore) throw new InternalServerError('Erro desconhecido');

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

      const salesUpdate = await Sales.Update(id, allowedData);

      if (salesUpdate === 'venda não encontrada') throw new BadRequest('Venda não registrada');
      if (!salesUpdate) throw new InternalServerError('Erro desconhecido');

      return res.status(200).json(salesUpdate);
    } catch (err) {
      next(err);
    }
  }
}

export default new SalesController();
