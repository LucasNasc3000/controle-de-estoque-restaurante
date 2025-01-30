/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import Notice from '../../repositories/Notice/Notice';
import SalesSearchSalesData from '../../repositories/Sales/SalesSearchSalesData';
import TimerDefinitions from './TimerDefinitions';

class NoticeController {
  async Store(req, res, next) {
    try {
      const validations = Validation.MainValidations(req.body);
      const noticeValidations = Validation.NoticesValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (noticeValidations !== null) throw new BadRequest(noticeValidations);

      const saleSearch = await SalesSearchSalesData.SearchById(req.body.sale_id);

      if (!saleSearch) throw new BadRequest('Não é possível adicionar um lembrete, esta venda não está registrada');

      const timer = TimerDefinitions.SetTimer(req.body.date, req.body.hour);
      // Timers.push(timer[0], timer[1]);

      // const { date, hour, sale_id } = req.body;

      // const toSave = {
      //   date,
      //   hour,
      //   timer_id: timer[0],
      //   sale_id,
      // };

      // const store = await Notice.Store(toSave);

      // if (!store) throw new InternalServerError('Erro interno');

      // return res.status(201).json(store);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;

      const validations = Validation.MainValidations(req.body, false, false, false, true);
      const inputValidations = Validation.NoticesValidation(req.body);

      if (validations !== null) throw new BadRequest(validations);
      if (inputValidations !== null) throw new BadRequest(inputValidations);

      const { sale_id, ...allowedData } = req.body;

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const noticeUpdate = await Notice.Update(id, allowedData);

      if (noticeUpdate === 'Lembrete não encontrado') throw new BadRequest('Lembrete não encontrado');

      if (!noticeUpdate) throw new InternalServerError('Erro interno');

      return res.status(200).send(noticeUpdate);
    } catch (err) {
      next(err);
    }
  }
}

export default new NoticeController();
