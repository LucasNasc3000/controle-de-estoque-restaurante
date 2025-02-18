/* eslint-disable camelcase */
/* eslint-disable default-case */
/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';
import Validations from '../../middlewares/fieldValidations/Validation';
import Notification from '../../Notifications/RegistersNotifications';
import InputSearchSimpleStrings from '../../repositories/Input/InputSearchSimpleStrings';
import OutputMethods from '../../repositories/Output/Output';
import InputConnection from './InputConnection';

class OutputController {
  async Store(req, res, next) {
    try {
      const areThereRegistredEmails = await Notification.AddressesAllowed();
      if (areThereRegistredEmails.length < 1 || areThereRegistredEmails === null) {
        throw new BadRequest('É necessário haver ao menos um funcionário autorizado a receber e-mails');
      }

      const { name } = req.body;
      const validations = Validations.MainValidations(req.body);
      const outputsValidations = Validations.OutputsValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (outputsValidations !== null) throw new BadRequest(outputsValidations);

      const inputExists = await InputSearchSimpleStrings.SearchByNameInternal(name);

      if (!inputExists) throw new BadRequest(`Ocorreu um erro interno ou o insumo ${name} não está cadastrado`);

      const inputConnection = await InputConnection.InputUpdate(inputExists, req.body);

      if (inputConnection) {
        if (inputConnection === 'no destinataries') {
          throw new BadRequest('Não há emails destinatários cadastrados ou as permissões estão incorretas.');
        }

        if (inputConnection[0] === 'limit reached') {
          throw new BadRequest(`Não é possível registrar novas saídas: o limite do insumo ${inputConnection[1]} foi alcançado.`);
        }

        if (inputConnection[0] === 'rate is near') {
          const store = await OutputMethods.Store(req.body);

          return res.json({
            warning: [`ATENÇÃO: Faltam ${inputExists.dataValues.rateisnear} unidades ou menos para o limite do insumo ${inputConnection[1]}.`],
            saida: [
              store,
            ],
          });
        }
      }

      const store2 = await OutputMethods.Store(req.body);

      if (!store2) throw new InternalServerError('Erro interno');

      return res.status(201).json(store2);
    } catch (err) {
      next(err);
    }
  }

  async List(req, res, next) {
    try {
      const outputs = await OutputMethods.List();

      if (!outputs) throw new InternalServerError('Erro interno');

      if (outputs.length < 1) return res.status(204).send('Nenhuma saída cadastrada ainda');

      return res.status(200).json(outputs);
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

      const { employee_id, ...allowedData } = req.body;

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const outputUpdate = await OutputMethods.Update(id, allowedData);

      if (outputUpdate === 'saída não encontrada') throw new BadRequest('Insumo não registrado');
      if (!outputUpdate) throw new InternalServerError('Erro interno');

      return res.status(200).send(outputUpdate);
    } catch (err) {
      next(err);
    }
  }
}

export default new OutputController();
