/* eslint-disable consistent-return */
import Sales from '../../repositories/Sales/Sales';
import Validation from '../../middlewares/fieldValidations/Validation';
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';

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

  async Index(req, res, next) {
    try {
      const salesList = await Sales.List();

      if (!salesList) throw new InternalServerError('Erro desconhecido');
      if (salesList.length < 1) throw new BadRequest('Não há vendas registradas');

      return res.status(200).json(salesList);
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

      const salesUpdate = await Sales.Update(id, req.body);

      if (salesUpdate === 'venda não encontrada') throw new BadRequest('Venda não registrada');
      if (!salesUpdate) throw new InternalServerError('Erro desconhecido');

      return res.status(200).json(salesUpdate);
    } catch (err) {
      next(err);
    }
  }
}

export default new SalesController();
