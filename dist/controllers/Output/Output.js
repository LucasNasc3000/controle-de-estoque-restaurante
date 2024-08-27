"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _Output = require('../../repositories/Output/Output'); var _Output2 = _interopRequireDefault(_Output);
var _InputSearchSimpleStrings = require('../../repositories/Input/InputSearchSimpleStrings'); var _InputSearchSimpleStrings2 = _interopRequireDefault(_InputSearchSimpleStrings);
var _InputConnection = require('./InputConnection'); var _InputConnection2 = _interopRequireDefault(_InputConnection);
var _Validation = require('../../middlewares/fieldValidations/Validation'); var _Validation2 = _interopRequireDefault(_Validation);
var _clientErrors = require('../../errors/clientErrors');
var _serverErrors = require('../../errors/serverErrors');

class OutputController {
  async Store(req, res, next) {
    try {
      const { name } = req.body;
      const validations = _Validation2.default.MainValidations(req.body);
      const outputsValidations = _Validation2.default.OutputsValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (outputsValidations !== null) throw new (0, _clientErrors.BadRequest)(outputsValidations);

      const inputExists = await _InputSearchSimpleStrings2.default.SearchByName(name);

      if (inputExists.length < 1) throw new (0, _clientErrors.BadRequest)(`Ocorreu um erro interno ou o insumo ${name} não está cadastrado`);
      if (!inputExists) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      const inputConnection = await _InputConnection2.default.InputUpdate(inputExists, req.body);

      if (inputConnection) {
        if (inputConnection[0] === 'limit reached') throw new (0, _clientErrors.BadRequest)(`Não é possível registrar novas saídas: o limite do insumo ${inputConnection[1]} foi alcançado.`);

        if (inputConnection[0] === 'rate is near') {
          await _InputConnection2.default.InputUpdate(inputExists, req.body);
          const store = await _Output2.default.Store(req.body);

          return res.json({
            warning: [`ATENÇÃO: Faltam 15 unidades ou menos para o limite do insumo ${inputConnection[1]}.`],
            saida: [
              store,
            ],
          });
        }
      } else {
        throw new (0, _clientErrors.BadRequest)('Não há emails destinatários cadastrados ou as permissões estão incorretas.');
      }

      const store = await _Output2.default.Store(req.body);

      if (!store) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(201).json(store);
    } catch (err) {
      next(err);
    }
  }

  async Index(req, res, next) {
    try {
      const outputsList = await _Output2.default.List();

      if (!outputsList) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (outputsList.length < 1) throw new (0, _clientErrors.BadRequest)('Não há sáidas registradas');

      return res.status(200).send(outputsList);
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

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const outputUpdate = await _Output2.default.Update(id, req.body);

      if (outputUpdate === 'saída não encontrada') throw new (0, _clientErrors.BadRequest)('Insumo não registrado');
      if (!outputUpdate) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(200).send(outputUpdate);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new OutputController();
