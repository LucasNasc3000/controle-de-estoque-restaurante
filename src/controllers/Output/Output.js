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

      const { name, unities } = req.body;
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

          await InputConnection.InputUpdateTotalWeight(inputExists, unities);

          return res.json({
            warning: [`ATENÇÃO: Faltam ${inputExists.dataValues.rateisnear} unidades ou menos para o limite do insumo ${inputConnection[1]}.`],
            saida: [
              store,
            ],
          });
        }
      }

      await InputConnection.InputUpdateTotalWeight(inputExists, unities);

      const store2 = await OutputMethods.Store(req.body);

      if (!store2) throw new InternalServerError('Erro interno');

      return res.status(201).json(store2);
    } catch (err) {
      next(err);
    }
  }
}

export default new OutputController();
