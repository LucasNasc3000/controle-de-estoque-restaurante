"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _forbidden = require('../../errors/forbidden');
var _notFound = require('../../errors/notFound');
var _serverErrors = require('../../errors/serverErrors');
var _EmployeeSearchCredentials = require('../../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);

class EmployeesSearchCredentialsController {
  async SearchByID(req, res, next) {
    try {
      const { headerid } = req.headers;

      if (headerid) throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');

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
      const { headerid } = req.headers;

      if (headerid) throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');

      const { name } = req.params;

      const employeeNameFinder = await _EmployeeSearchCredentials2.default.SearchByName(name);

      if (!employeeNameFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (employeeNameFinder.length < 1) throw new (0, _notFound.NotFound)('Funcionário não encontrado');

      return res.status(200).json(employeeNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByPermission(req, res, next) {
    try {
      const { headerid } = req.headers;

      if (headerid) throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');

      const { permission } = req.params;

      const employeePermissionFinder = await
      _EmployeeSearchCredentials2.default.SearchByPermission(permission);

      if (!employeePermissionFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');
      if (employeePermissionFinder.length < 1) throw new (0, _notFound.NotFound)('Funcionário não encontrado');

      return res.status(200).json(employeePermissionFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchOneByName(req, res, next) {
    try {
      const { headerid } = req.headers;

      if (headerid) throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');

      const { uniquename } = req.params;

      const employeeNameFinder = await _EmployeeSearchCredentials2.default.SearchOneByName(uniquename);

      if (!employeeNameFinder) throw new (0, _notFound.NotFound)('Funcionário não encontrado');

      return res.status(200).json(employeeNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmail(req, res, next) {
    try {
      const { headerid, email } = req.headers;
      const { emailParam } = req.params;

      if (headerid) {
        if (email !== emailParam) throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');

        const employeeSelfEmailFinder = await _EmployeeSearchCredentials2.default.SearchByEmail(emailParam);

        if (!employeeSelfEmailFinder) throw new (0, _notFound.NotFound)('Funcionário não encontrado');

        return res.status(200).json(employeeSelfEmailFinder);
      }

      const employeeEmailFinder = await _EmployeeSearchCredentials2.default.SearchByEmail(emailParam);

      if (!employeeEmailFinder) throw new (0, _notFound.NotFound)('Funcionário não encontrado');

      return res.status(200).json(employeeEmailFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new EmployeesSearchCredentialsController();
