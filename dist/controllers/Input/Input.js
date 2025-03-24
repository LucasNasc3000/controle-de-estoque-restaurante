"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
/* eslint-disable consistent-return */
var _clientErrors = require('../../errors/clientErrors');
var _serverErrors = require('../../errors/serverErrors');
var _Validation = require('../../middlewares/fieldValidations/Validation'); var _Validation2 = _interopRequireDefault(_Validation);
var _Input = require('../../repositories/Input/Input'); var _Input2 = _interopRequireDefault(_Input);

class InputController {
  async Store(req, res, next) {
    try {
      const validations = _Validation2.default.MainValidations(req.body);
      const inputValidations = _Validation2.default.InputsValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (inputValidations !== null) throw new (0, _clientErrors.BadRequest)(inputValidations);

      const store = await _Input2.default.Store(req.body);

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
      const inputValidations = _Validation2.default.InputsValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (inputValidations !== null) throw new (0, _clientErrors.BadRequest)(inputValidations);

      const { employee_id, ...allowedData } = req.body;

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const inputUpdate = await _Input2.default.Update(id, allowedData);

      if (inputUpdate === 'insumo não encontrado') throw new (0, _clientErrors.BadRequest)('Insumo não encontrado');

      if (!inputUpdate) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(200).send(inputUpdate);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new InputController();
