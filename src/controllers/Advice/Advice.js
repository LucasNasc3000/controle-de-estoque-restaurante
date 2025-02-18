/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import Advice from '../../repositories/Advice/Advice';
import AdviceSearch from '../../repositories/Advice/AdviceSearch';
import TimerDefinitions from './TimerDefinitions';
import { Timers } from './timersStore';

class AdviceController {
  async Store(req, res, next) {
    try {
      const validations = Validation.MainValidations(req.body);
      const adviceValidations = Validation.AdvicesValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (adviceValidations !== null) throw new BadRequest(adviceValidations);

      const {
        date, hour, employee_id, subject, email_body,
      } = req.body;

      const timer = await TimerDefinitions.NewAdvice(date, hour, [subject, email_body]);

      const toSave = {
        date,
        hour,
        timer_id: timer[0],
        employee_id,
        subject,
        email_body,
      };

      const store = await Advice.Store(toSave);

      const findElement = Timers.find((time) => time[0] === timer[0]);
      findElement.push(store.dataValues.id);

      if (!store) throw new InternalServerError('Erro interno');

      return res.status(201).json(store);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;

      const validations = Validation.MainValidations(req.body, false, false, false, true);
      const adviceValidations = Validation.AdvicesValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (adviceValidations !== null) throw new BadRequest(adviceValidations);

      const { employee_id, ...allowedData } = req.body;

      const findAdvice = await AdviceSearch.SearchById(id);

      if (findAdvice === 'Lembrete não encontrado') throw new BadRequest('Lembrete não encontrado');

      const { timer_id } = findAdvice.dataValues;

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.

      TimerDefinitions.UpdatingAdvice(
        allowedData.date,
        allowedData.hour,
        timer_id,
        [allowedData.subject, allowedData.email_body],
      );

      const adviceUpdate = await Advice.Update(id, allowedData);

      if (!adviceUpdate) throw new InternalServerError('Erro interno');

      return res.status(200).send(adviceUpdate);
    } catch (err) {
      next(err);
    }
  }

  async Delete(req, res, next) {
    try {
      const { id } = req.params;

      TimerDefinitions.DeletingAdvice(id);

      const adviceDelete = await Advice.Delete(id);

      if (adviceDelete === 'Lembrete não encontrado') throw new BadRequest('O lembrete já foi deletado ou não existe');
      if (!adviceDelete) throw new InternalServerError('Erro ao tentar deletar o lembrete');

      return res.status(200).send('Lembrete deletado');
    } catch (err) {
      next(err);
    }
  }

  async Recovery(req, res, next) {
    try {
      const advicesDbCheck = await Advice.List();

      if (!advicesDbCheck) throw new InternalServerError('Erro ao verificar timers. Os mesmos já podem estar em funcionamento');

      await TimerDefinitions.Recovery(advicesDbCheck);

      if (Timers.length < 1) throw new InternalServerError('Erro ao recuperar timers');

      return res.status(200).send('Timers recuperados');
    } catch (err) {
      next(err);
    }
  }
}

export default new AdviceController();
