"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Employee = require('../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);

exports. default = async (req, res, next) => {
  // Das linhas 8 a 16 ocorre uma verificação da existência ou não do campo authorization no
  // cabeçalho da requisição
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login é necessário para esta operação'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET);
    const { email, id } = dados;

    // Checa se o id e o email são os mesmos que foram usados para gerar o token
    const employee = await _Employee2.default.findOne({
      where: {
        id,
        email,
      },
    });

    if (!employee) {
      return res.status(401).json({
        errors: ['Funcionário inválido'], // Este erro quer dizer que o usuário que mudou seu próprio email precisa logar denovo porque o email não vai bater com o token
      });
    }

    req.employeeId = id;
    req.employeeEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
