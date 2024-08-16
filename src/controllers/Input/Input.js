/* eslint-disable consistent-return */
import InputMethods from '../../repositories/Input/Input';
import Validation from '../../middlewares/fieldValidations/Validation';
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';

class InputController {
  async Store(req, res, next) {
    try {
      const validations = Validation.MainValidations(req.body);
      const inputValidations = Validation.InputsValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (inputValidations !== null) throw new BadRequest(inputValidations);

      const store = await InputMethods.Store(req.body);

      if (!store) throw new InternalServerError('Erro desconhecido');

      return res.status(201).json(store);
    } catch (err) {
      next(err);
    }
  }

  async Index(req, res, next) {
    try {
      const inputList = await InputMethods.List();

      if (inputList === null) throw new InternalServerError('Ocorreu um erro interno ou não há insumos cadastrados');
      if (inputList !== null && !inputList) throw new InternalServerError('Erro desconhecido');

      return res.status(200).send(inputList);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;
      const validations = Validation.MainValidations(req.body);
      const inputValidations = Validation.InputsValidation(req.body);

      if (!id) throw new BadRequest('id não informado');
      if (validations !== null) throw new BadRequest(validations);
      if (inputValidations !== null) throw new BadRequest(inputValidations);

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const inputUpdate = await InputMethods.Update(id, req.body);

      if (inputUpdate === null) throw new BadRequest('Insumo não registrado');
      if (inputUpdate !== null && !inputUpdate) throw new InternalServerError('Erro desconhecido');

      return res.status(200).send(inputUpdate);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputController();
