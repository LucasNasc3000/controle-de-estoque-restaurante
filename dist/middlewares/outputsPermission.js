"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _authErrors = require('../errors/authErrors');
var _clientErrors = require('../errors/clientErrors');
var _Employee = require('../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);

exports. default = async (req, res, next) => {
  try {
    const { permission, email, adminpassword } = req.headers;
    let adminPassValidator = '';

    if (!permission || !email) {
      throw new (0, _authErrors.Unauthorized)('Permissao para saidas e id necessarios');
    }

    const employee = await _Employee2.default.findOne({
      where: {
        email,
        is_active: 1,
      },
    });

    if (!employee) {
      throw new (0, _clientErrors.BadRequest)('Funcionário não encontrado ou inativo');
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
