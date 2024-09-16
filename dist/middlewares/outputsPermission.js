"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _EmployeeSearchCredentials = require('../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);
var _authErrors = require('../errors/authErrors');
var _clientErrors = require('../errors/clientErrors');

exports. default = async (req, res, next) => {
  try {
    const { permission, employeeid, adminpassword } = req.headers;
    let adminPassValidator = '';

    if (!permission || !employeeid) {
      throw new (0, _authErrors.Unauthorized)('Permissao para saidas e id necessarios');
    }

    const employee = await _EmployeeSearchCredentials2.default.SearchById(employeeid);

    if (!employee) {
      throw new (0, _clientErrors.BadRequest)('Funcionário não encontrado');
    }

    if (adminpassword) {
      adminPassValidator = await employee.AdminPasswordValidator(adminpassword);
    }

    switch (true) {
      case (employee.permission !== permission):
        throw new (0, _authErrors.Unauthorized)('Acesso negado, permissao para saidas necessaria');

      case (employee.permission === process.env.ADMIN_PERMISSION
        && adminPassValidator === true
        && employee.permission === permission):
        return next();

      case (employee.permission === process.env.OUTPUTS_PERMISSION
        && employee.permission === permission):
        return next();

      case (employee.permission === process.env.INPUTS_OUTPUTS_PERMISSION
        && employee.permission === permission):
        return next();

      case (employee.permission === process.env.SO_PERMISSION
        && employee.permission === permission):
        return next();

      case (employee.permission === process.env.SOI_PERMISSION
        && employee.permission === permission):
        return next();

      default:
        throw new (0, _authErrors.Unauthorized)('Acesso negado, permissao para saidas ou de administrador necessaria');
    }
  } catch (err) {
    next(err);
  }
};
