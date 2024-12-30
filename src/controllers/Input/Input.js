/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import InputMethods from '../../repositories/Input/Input';
import InputSearchIntegers from '../../repositories/Input/InputSearchIntegers';

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

  async Update(req, res, next) {
    try {
      const { id } = req.params;

      const inputSearch = await InputSearchIntegers.SearchByID(id);

      if (!inputSearch) throw new BadRequest('Insumo não registrado');

      const validations = Validation.MainValidations(req.body, false, false, false, true);
      const inputValidations = Validation.InputsValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (inputValidations !== null) throw new BadRequest(inputValidations);

      const { employee_id, ...allowedData } = req.body;

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const inputUpdate = await InputMethods.Update(id, allowedData);

      if (inputUpdate === 'insumo não encontrado') throw new BadRequest('Insumo não encontrado');

      if (!inputUpdate) throw new InternalServerError('Erro interno');

      return res.status(200).send(inputUpdate);
    } catch (err) {
      next(err);
    }
  }
}

export default new InputController();
