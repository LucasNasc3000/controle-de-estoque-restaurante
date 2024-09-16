"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
/* eslint-disable default-case */
var _EmployeeSearchCredentials = require('../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);
var _authErrors = require('../errors/authErrors');
var _clientErrors = require('../errors/clientErrors');

exports. default = async (req, res, next) => {
  try {
    const { permission, employeeid, adminpassword } = req.headers;

    if (!permission || !employeeid || !adminpassword) {
      throw new (0, _authErrors.Unauthorized)('Permissao, senha de admin e employeeid necessarios');
    }

    const employee = await _EmployeeSearchCredentials2.default.SearchById(employeeid);

    if (!employee) {
      throw new (0, _clientErrors.BadRequest)('Funcionário não encontrado');
    }

    const adminPassValidator = await employee.AdminPasswordValidator(adminpassword);

    switch (true) {
      case (employee.permission !== permission):
        throw new (0, _authErrors.Unauthorized)('Acesso negado, permissao incorreta');

      case (employee.permission !== process.env.ADMIN_PERMISSION):
        throw new (0, _authErrors.Unauthorized)('Acesso negado, permissao para administrador necessaria');

      case (!adminPassValidator):
        throw new (0, _authErrors.Unauthorized)('Senha incorreta');
    }
    return next();
  } catch (err) {
    next(err);
  }
};
