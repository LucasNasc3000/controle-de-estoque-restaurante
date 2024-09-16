"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _EmployeeSearchCredentials = require('../../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');

class EmployeesSearchCredentialsController {
  async SearchByID(req, res, next) {
    try {
      const { id } = req.params;

      const employeeIDFinder = await _EmployeeSearchCredentials2.default.SearchById(id);

      if (!employeeIDFinder) throw new (0, _notFound.NotFound)('Funcionário não encontrado');

      return res.status(200).json(employeeIDFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByName(req, res, next) {
    try {
      const { name } = req.params;

      const employeeNameFinder = await _EmployeeSearchCredentials2.default.SearchByName(name);

      if (!employeeNameFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (employeeNameFinder.length < 1) throw new (0, _notFound.NotFound)('Funcionário não encontrado');

      return res.status(200).json(employeeNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmail(req, res, next) {
    try {
      const { email } = req.params;

      const employeeEmailFinder = await _EmployeeSearchCredentials2.default.SearchByEmail(email);

      if (!employeeEmailFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (employeeEmailFinder.length < 1) throw new (0, _notFound.NotFound)('Funcionário não encontrado');

      return res.status(200).json(employeeEmailFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new EmployeesSearchCredentialsController();
