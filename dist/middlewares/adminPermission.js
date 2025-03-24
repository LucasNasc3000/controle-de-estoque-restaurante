"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
/* eslint-disable default-case */
var _authErrors = require('../errors/authErrors');
var _clientErrors = require('../errors/clientErrors');
var _Employee = require('../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);

exports. default = async (req, res, next) => {
  try {
    const {
      permission, email, adminpassword, headerid,
    } = req.headers;

    if (!permission || !email || !adminpassword) {
      throw new (0, _authErrors.Unauthorized)('Permissao, senha de admin e email necessarios');
    }

    if (headerid) {
      const employeeById = await _Employee2.default.findOne({
        where: {
          id: headerid,
          is_active: 1,
        },
      });

      if (!employeeById) throw new (0, _authErrors.Unauthorized)('O funcionário não existe');
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

    const adminPassValidator = await employee.AdminPasswordValidator(adminpassword);

    switch (true) {
      case (employee.permission !== permission):
        throw new (0, _authErrors.Unauthorized)('Acesso negado, permissao incorreta');

      case (headerid && employee.permission !== process.env.ADMIN_PERMISSION):
        return next();

      case (employee.permission !== process.env.ADMIN_PERMISSION && !headerid):
        throw new (0, _authErrors.Unauthorized)('Acesso negado, permissao para administrador necessaria');

      case (!adminPassValidator):
        throw new (0, _authErrors.Unauthorized)('Senha incorreta');
    }
    return next();
  } catch (err) {
    next(err);
  }
};
