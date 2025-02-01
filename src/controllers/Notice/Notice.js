/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import Notice from '../../repositories/Notice/Notice';
import NoticeSearch from '../../repositories/Notice/NoticeSearch';
import SalesSearchSalesData from '../../repositories/Sales/SalesSearchSalesData';
import TimerDefinitions from './TimerDefinitions';
import { Timers } from './timersStore';

class NoticeController {
  async Store(req, res, next) {
    try {
      const validations = Validation.MainValidations(req.body);
      const noticeValidations = Validation.NoticesValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (noticeValidations !== null) throw new BadRequest(noticeValidations);

      const saleSearch = await SalesSearchSalesData.SearchById(req.body.sale_id);

      if (!saleSearch) throw new BadRequest('Não é possível adicionar um lembrete, esta venda não está registrada');

      const timer = TimerDefinitions.NewNotice(req.body.date, req.body.hour);

      const {
        date, hour, sale_id, employee_id,
      } = req.body;

      const toSave = {
        date,
        hour,
        timer_id: timer[0],
        sale_id,
        employee_id,
      };

      const store = await Notice.Store(toSave);

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
      const noticeValidations = Validation.NoticesValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (noticeValidations !== null) throw new BadRequest(noticeValidations);

      const { sale_id, employee_id, ...allowedData } = req.body;

      const findNotice = await NoticeSearch.SearchById(id);

      if (findNotice === 'Lembrete não encontrado') throw new BadRequest('Lembrete não encontrado');

      const { timer_id } = findNotice.dataValues;

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.

      TimerDefinitions.UpdatingNotice(allowedData.date, allowedData.hour, timer_id);

      const noticeUpdate = await Notice.Update(id, allowedData);

      if (!noticeUpdate) throw new InternalServerError('Erro interno');

      return res.status(200).send(noticeUpdate);
    } catch (err) {
      next(err);
    }
  }

  async Delete(req, res, next) {
    try {
      const { id } = req.params;

      TimerDefinitions.DeletingNotice(id);

      const noticeDelete = await Notice.Delete(id);

      if (noticeDelete === 'Lembrete não encontrado') throw new BadRequest('O lembrete já foi deletado ou não existe');
      if (!noticeDelete) throw new InternalServerError('Erro ao tentar deletar o lembrete');

      return res.status(200).send('Lembrete deletado');
    } catch (err) {
      next(err);
    }
  }
}

export default new NoticeController();
