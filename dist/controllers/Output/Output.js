"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
/* eslint-disable default-case */
/* eslint-disable consistent-return */
var _clientErrors = require('../../errors/clientErrors');
var _serverErrors = require('../../errors/serverErrors');
var _Validation = require('../../middlewares/fieldValidations/Validation'); var _Validation2 = _interopRequireDefault(_Validation);
var _RegistersNotifications = require('../../Notifications/RegistersNotifications'); var _RegistersNotifications2 = _interopRequireDefault(_RegistersNotifications);
var _InputSearchSimpleStrings = require('../../repositories/Input/InputSearchSimpleStrings'); var _InputSearchSimpleStrings2 = _interopRequireDefault(_InputSearchSimpleStrings);
var _Output = require('../../repositories/Output/Output'); var _Output2 = _interopRequireDefault(_Output);
var _InputConnection = require('./InputConnection'); var _InputConnection2 = _interopRequireDefault(_InputConnection);

class OutputController {
  async Store(req, res, next) {
    try {
      const areThereRegistredEmails = await _RegistersNotifications2.default.AddressesAllowed();
      if (areThereRegistredEmails.length < 1 || areThereRegistredEmails === null) {
        throw new (0, _clientErrors.BadRequest)('É necessário haver ao menos um funcionário autorizado a receber e-mails');
      }

<<<<<<< HEAD
      const { name, unities } = req.body;
=======
      const { name } = req.body;
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
      const validations = _Validation2.default.MainValidations(req.body);
      const outputsValidations = _Validation2.default.OutputsValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (outputsValidations !== null) throw new (0, _clientErrors.BadRequest)(outputsValidations);

      const inputExists = await _InputSearchSimpleStrings2.default.SearchByNameInternal(name);

      if (!inputExists) throw new (0, _clientErrors.BadRequest)(`Ocorreu um erro interno ou o insumo ${name} não está cadastrado`);

      const inputConnection = await _InputConnection2.default.InputUpdate(inputExists, req.body);

      if (inputConnection) {
        if (inputConnection === 'no destinataries') {
          throw new (0, _clientErrors.BadRequest)('Não há emails destinatários cadastrados ou as permissões estão incorretas.');
        }

        if (inputConnection[0] === 'limit reached') {
          throw new (0, _clientErrors.BadRequest)(`Não é possível registrar novas saídas: o limite do insumo ${inputConnection[1]} foi alcançado.`);
        }

        if (inputConnection[0] === 'rate is near') {
          const store = await _Output2.default.Store(req.body);

          await _InputConnection2.default.InputUpdateTotalWeight(inputExists, unities);

          return res.json({
            warning: [`ATENÇÃO: Faltam ${inputExists.dataValues.rateisnear} unidades ou menos para o limite do insumo ${inputConnection[1]}.`],
            saida: [
              store,
            ],
          });
        }
      }

<<<<<<< HEAD
      await _InputConnection2.default.InputUpdateTotalWeight(inputExists, unities);

      const store2 = await _Output2.default.Store(req.body);

      if (!store2) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(201).json(store2);
=======
      const store2 = await _Output2.default.Store(req.body);

      if (!store2) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(201).json(store2);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;

      const validations = _Validation2.default.MainValidations(req.body);
      const outputsValidations = _Validation2.default.OutputsValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (outputsValidations !== null) throw new (0, _clientErrors.BadRequest)(outputsValidations);

      const { employee_id, ...allowedData } = req.body;

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const outputUpdate = await _Output2.default.Update(id, allowedData);

      if (outputUpdate === 'saída não encontrada') throw new (0, _clientErrors.BadRequest)('Insumo não registrado');
      if (!outputUpdate) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(200).send(outputUpdate);
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new OutputController();
