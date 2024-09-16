"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Employee = require('../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _LogRegister = require('../Logs/LogRegister'); var _LogRegister2 = _interopRequireDefault(_LogRegister);
var _clientErrors = require('../errors/clientErrors');
var _authErrors = require('../errors/authErrors');

class TokenController {
  // Cria o JWT baseado no email e senha que o usuário enviar no front-end para fazer login.
  // É feita uma pesquisa com o email enviado para verificar se ele existe, depois uma validação
  // de senha. Se ambos os dados forem confirmados o JWT é gerado para o usuário.
  async Store(req, res, next) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) throw new (0, _clientErrors.BadRequest)('Email e senha necessários para logar');

      const employee = await _Employee2.default.findOne({ where: { email } });

      if (!employee) throw new (0, _authErrors.Unauthorized)('O usuário não existe');

      if (!(await employee.PasswordValidator(password))) throw new (0, _authErrors.Unauthorized)('Senha inválida');

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
