/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { Forbidden } from '../../errors/forbidden';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import InputMethods from '../../repositories/Input/Input';

class InputController {
  async Store(req, res, next) {
    try {
      const validations = Validation.MainValidations(req.body);
      const inputValidations = Validation.InputsValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (inputValidations !== null) throw new BadRequest(inputValidations);

      const store = await InputMethods.Store(req.body);

      if (!store) throw new InternalServerError('Erro interno');

      return res.status(201).json(store);
    } catch (err) {
      next(err);
    }
  }

  async Index(req, res, next) {
    try {
      const inputList = await InputMethods.List();

      if (!inputList) throw new InternalServerError('Erro interno');
      if (inputList.length < 1) throw new InternalServerError('Não há insumos cadastrados');

      return res.status(200).send(inputList);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;
      const { employee_id } = req.body;

      if (employee_id) throw new Forbidden('Ação não permitida');

      const validations = Validation.MainValidations(req.body, false, false, false, true);
      const inputValidations = Validation.InputsValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (inputValidations !== null) throw new BadRequest(inputValidations);

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const inputUpdate = await InputMethods.Update(id, req.body);

      if (inputUpdate === 'insumo não encontrado') throw new BadRequest('Insumo não registrado');
      if (!inputUpdate) throw new InternalServerError('Erro interno');

      return res.status(200).send(inputUpdate);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputController();
