"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
/* eslint-disable consistent-return */
var _clientErrors = require('../../errors/clientErrors');
var _serverErrors = require('../../errors/serverErrors');
var _Validation = require('../../middlewares/fieldValidations/Validation'); var _Validation2 = _interopRequireDefault(_Validation);
var _Advice = require('../../repositories/Advice/Advice'); var _Advice2 = _interopRequireDefault(_Advice);
var _AdviceSearch = require('../../repositories/Advice/AdviceSearch'); var _AdviceSearch2 = _interopRequireDefault(_AdviceSearch);
var _TimerDefinitions = require('./TimerDefinitions'); var _TimerDefinitions2 = _interopRequireDefault(_TimerDefinitions);
var _timersStore = require('./timersStore');

class AdviceController {
  async Store(req, res, next) {
    try {
      const validations = _Validation2.default.MainValidations(req.body);
      const adviceValidations = _Validation2.default.AdvicesValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (adviceValidations !== null) throw new (0, _clientErrors.BadRequest)(adviceValidations);

      const {
        date, hour, employee_id, subject, email_body,
      } = req.body;

      const timer = await _TimerDefinitions2.default.NewAdvice(date, hour, [subject, email_body]);

      const toSave = {
        date,
        hour,
        timer_id: timer[0],
        employee_id,
        subject,
        email_body,
      };

      const store = await _Advice2.default.Store(toSave);

      const findElement = _timersStore.Timers.find((time) => time[0] === timer[0]);
      findElement.push(store.dataValues.id);

      if (!store) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(201).json(store);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;

      const validations = _Validation2.default.MainValidations(req.body, false, false, false, true);
      const adviceValidations = _Validation2.default.AdvicesValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (adviceValidations !== null) throw new (0, _clientErrors.BadRequest)(adviceValidations);

      const { employee_id, ...allowedData } = req.body;

      const findAdvice = await _AdviceSearch2.default.SearchById(id);

      if (findAdvice === 'Lembrete não encontrado') throw new (0, _clientErrors.BadRequest)('Lembrete não encontrado');

      const { timer_id } = findAdvice.dataValues;

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.

      _TimerDefinitions2.default.UpdatingAdvice(
        allowedData.date,
        allowedData.hour,
        timer_id,
        [allowedData.subject, allowedData.email_body],
      );

      const adviceUpdate = await _Advice2.default.Update(id, allowedData);

      if (!adviceUpdate) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(200).send(adviceUpdate);
    } catch (err) {
      next(err);
    }
  }

  async Delete(req, res, next) {
    try {
      const { id } = req.params;

      _TimerDefinitions2.default.DeletingAdvice(id);

      const adviceDelete = await _Advice2.default.Delete(id);

      if (adviceDelete === 'Lembrete não encontrado') throw new (0, _clientErrors.BadRequest)('O lembrete já foi deletado ou não existe');
      if (!adviceDelete) throw new (0, _serverErrors.InternalServerError)('Erro ao tentar deletar o lembrete');

      return res.status(200).send('Lembrete deletado');
    } catch (err) {
      next(err);
    }
  }

  async Recovery(req, res, next) {
    try {
      const advicesDbCheck = await _Advice2.default.List();

      if (!advicesDbCheck) throw new (0, _serverErrors.InternalServerError)('Erro ao verificar timers. Os mesmos já podem estar em funcionamento');

      await _TimerDefinitions2.default.Recovery(advicesDbCheck);

      if (_timersStore.Timers.length < 1) throw new (0, _serverErrors.InternalServerError)('Erro ao recuperar timers');

      return res.status(200).send('Timers recuperados');
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new AdviceController();
