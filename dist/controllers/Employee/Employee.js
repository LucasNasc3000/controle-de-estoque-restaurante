"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _clientErrors = require('../../errors/clientErrors');
var _forbidden = require('../../errors/forbidden');
var _serverErrors = require('../../errors/serverErrors');
var _Validation = require('../../middlewares/fieldValidations/Validation'); var _Validation2 = _interopRequireDefault(_Validation);
var _Employee = require('../../repositories/Employee/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _EmployeeSearchCredentials = require('../../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);

class EmployeeController {
  async Store(req, res, next) {
    try {
      const { headerid } = req.headers;

      if (headerid) throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');

      const validations = _Validation2.default.MainValidations(req.body, true);
      const employeesValidations = _Validation2.default.EmployeeValidation(req.body, false, false);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (employeesValidations !== null) throw new (0, _clientErrors.BadRequest)(employeesValidations);

      const emailExists = await _EmployeeSearchCredentials2.default.SearchByEmail(req.body.email);

      if (emailExists) throw new (0, _clientErrors.BadRequest)('E-mail em uso, tente cadastrar outro');

      const employeeStore = await _Employee2.default.Store(req.body);

      const { password, adminpassword, ...allowedData } = employeeStore.dataValues;

      if (!employeeStore) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(201).json(allowedData);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;
      const { headerid } = req.headers;

      const validations = _Validation2.default.MainValidations(req.body, true, false, false, true);
      const usersValidations = _Validation2.default.EmployeeValidation(req.body, false, true);

      if (validations !== null) throw new (0, _clientErrors.BadRequest)(validations);
      if (usersValidations !== null) throw new (0, _clientErrors.BadRequest)(usersValidations);

      if (req.body.email) {
        const emailExists = await _EmployeeSearchCredentials2.default.SearchByEmail(req.body.email);
        if (emailExists) throw new (0, _clientErrors.BadRequest)('E-mail em uso');
      }

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.

      if (headerid) {
        if (headerid !== id) throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');

        if (req.body.permission
           || req.body.address_allowed
            || req.body.boss) {
          throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');
        }

        if (typeof req.body.is_active === 'string' || typeof req.body.is_active === 'number' || typeof req.body.is_active === 'boolean') {
          throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');
        }

        const employeeSelfUpdate = await _Employee2.default.Update(headerid, req.body);

        if (employeeSelfUpdate === 'funcionário não encontrado') throw new (0, _clientErrors.BadRequest)('Funcionário não registrado');
        if (!employeeSelfUpdate) throw new (0, _serverErrors.InternalServerError)('Erro interno');

        const empSearch = await _EmployeeSearchCredentials2.default.SearchById(id);

        return res.status(200).send(empSearch);
      }

      const employeeUpdate = await _Employee2.default.Update(id, req.body);

      if (employeeUpdate === 'funcionário não encontrado') throw new (0, _clientErrors.BadRequest)('Funcionário não registrado');
      if (!employeeUpdate) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      const empSearch = await _EmployeeSearchCredentials2.default.SearchById(id);

      return res.status(200).send(empSearch);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new EmployeeController();
