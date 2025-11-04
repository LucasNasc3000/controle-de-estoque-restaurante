"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _LogRegister = require('../Logs/LogRegister'); var _LogRegister2 = _interopRequireDefault(_LogRegister);
var _authErrors = require('../errors/authErrors');
var _clientErrors = require('../errors/clientErrors');
var _Employee = require('../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);

class TokenController {
  async Store(req, res, next) {
    try {
      const {
        email = '', password = '', adminpassword = '', permission = '',
      } = req.body;

      if (!email || !password || !adminpassword || !permission) throw new (0, _clientErrors.BadRequest)('Email, senha, senha de admin e permissao necessários para logar');

      const employee = await _Employee2.default.findOne({ where: { email, is_active: 1 } });

      // eslint-disable-next-line default-case
      switch (true) {
        case !employee:
          throw new (0, _authErrors.Unauthorized)('O funcionário não existe ou está inativo');

        case !(await employee.PasswordValidator(password)):
          throw new (0, _authErrors.Unauthorized)('Senha inválida');

        case !(await employee.AdminPasswordValidator(adminpassword)):
          throw new (0, _authErrors.Unauthorized)('Senha de administrador inválida');

        case permission !== employee.permission:
          throw new (0, _authErrors.Unauthorized)('Permissão incorreta');
      }

      const { id } = employee;

      const token = _jsonwebtoken2.default.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
      });

      await _LogRegister2.default.createLog(id, email);

      return res.json({ token, employee: { nome: employee.name, id, email } });
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new TokenController();
