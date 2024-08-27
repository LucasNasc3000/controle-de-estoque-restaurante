"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _Employee = require('../../repositories/Employee/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _Validation = require('../../middlewares/fieldValidations/Validation'); var _Validation2 = _interopRequireDefault(_Validation);
var _clientErrors = require('../../errors/clientErrors');
var _serverErrors = require('../../errors/serverErrors');

class EmployeeController {
  async Store(req, res, next) {
    try {
      const validations = _Validation2.default.MainValidations(req.body, true);
      const employeesValidations = _Validation2.default.EmployeeValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (employeesValidations !== null) throw new (0, _clientErrors.BadRequest)(employeesValidations);

      const employeeStore = await _Employee2.default.Store(req.body);

      if (!employeeStore) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(201).json(employeeStore);
    } catch (err) {
      next(err);
    }
  }

  async Index(req, res, next) {
    try {
      const employeesList = await _Employee2.default.List();

      if (!employeesList) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (employeesList.length < 1) throw new (0, _serverErrors.InternalServerError)('Não há funcionários cadastrados.');

      return res.status(200).send(employeesList);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;
      const validations = _Validation2.default.MainValidations(req.body, true);
      const usersValidations = _Validation2.default.EmployeeValidation(req.body);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (usersValidations !== null) throw new (0, _clientErrors.BadRequest)(usersValidations);

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const employeeUpdate = await _Employee2.default.Update(id, req.body);

      if (employeeUpdate === 'funcionário não encontrado') throw new (0, _clientErrors.BadRequest)('Funcionário não registrado');
      if (!employeeUpdate) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(200).send(employeeUpdate);
    } catch (err) {
      next(err);
    }
  }

  async Delete(req, res, next) {
    try {
      const { id } = req.params;

      const employeeDelete = await _Employee2.default.Delete(id);

      if (employeeDelete === 'funcionário não registrado') throw new (0, _clientErrors.BadRequest)('Funcionário não registrado');
      if (!employeeDelete) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(200).json(`Funcionário ${id} deletado`);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new EmployeeController();
