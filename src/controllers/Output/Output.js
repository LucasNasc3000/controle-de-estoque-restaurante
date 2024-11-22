/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';
import Validations from '../../middlewares/fieldValidations/Validation';
import EmployeeSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';
import InputSearchSimpleStrings from '../../repositories/Input/InputSearchSimpleStrings';
import OutputMethods from '../../repositories/Output/Output';
import InputConnection from './InputConnection';

class OutputController {
  async Store(req, res, next) {
    try {
      const { name } = req.body;
      const validations = Validations.MainValidations(req.body);
      const outputsValidations = Validations.OutputsValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (outputsValidations !== null) throw new BadRequest(outputsValidations);

      const inputExists = await InputSearchSimpleStrings.SearchByNameInternal(name);

      if (inputExists.length < 1) throw new BadRequest(`Ocorreu um erro interno ou o insumo ${name} não está cadastrado`);
      if (!inputExists) throw new InternalServerError('Erro interno');

      const inputConnection = await InputConnection.InputUpdate(inputExists, req.body);
      const etst = await EmployeeSearchCredentials.SearchByAddressAllowed();
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < etst.length; i++) {
        if (etst[i].dataValues.permission === process.env.INPUTS_OUTPUTS_PERMISSION
            || etst[i].dataValues.permission === process.env.SOI_PERMISSION
            || etst[i].dataValues.permission === process.env.ADMIN_PERMISSION
        ) {
          console.log(`ESTE: ${etst[i].email}`);
        }
      }
      console.log(etst);

      if (inputConnection) {
        if (inputConnection[0] === 'limit reached') throw new BadRequest(`Não é possível registrar novas saídas: o limite do insumo ${inputConnection[1]} foi alcançado.`);

        if (inputConnection[0] === 'rate is near') {
          // pq é chamado duas vezes o InputUpdate?
          await InputConnection.InputUpdate(inputExists, req.body);
          const store = await OutputMethods.Store(req.body);

          return res.json({
            warning: [`ATENÇÃO: Faltam 15 unidades ou menos para o limite do insumo ${inputConnection[1]}.`],
            saida: [
              store,
            ],
          });
        }
      } else {
        throw new BadRequest('Não há emails destinatários cadastrados ou as permissões estão incorretas.');
      }

      const store = await OutputMethods.Store(req.body);

      if (!store) throw new InternalServerError('Erro interno');

      return res.status(201).json(store);
    } catch (err) {
      next(err);
    }
  }

  async Index(req, res, next) {
    try {
      const outputsList = await OutputMethods.List();

      if (!outputsList) throw new InternalServerError('Erro interno');
      if (outputsList.length < 1) throw new BadRequest('Não há sáidas registradas');

      return res.status(200).send(outputsList);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;
      const validations = Validations.MainValidations(req.body);
      const outputsValidations = Validations.OutputsValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (outputsValidations !== null) throw new BadRequest(outputsValidations);

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const outputUpdate = await OutputMethods.Update(id, req.body);

      if (outputUpdate === 'saída não encontrada') throw new BadRequest('Insumo não registrado');
      if (!outputUpdate) throw new InternalServerError('Erro interno');

      return res.status(200).send(outputUpdate);
    } catch (err) {
      next(err);
    }
  }
}

export default new OutputController();
