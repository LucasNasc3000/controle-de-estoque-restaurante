"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _authErrors = require('../errors/authErrors');
var _clientErrors = require('../errors/clientErrors');
<<<<<<< HEAD
var _conflict = require('../errors/conflict');
=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
var _emailsErrors = require('../errors/emailsErrors');
var _forbidden = require('../errors/forbidden');
var _logErrors = require('../errors/logErrors');
var _notFound = require('../errors/notFound');
var _serverErrors = require('../errors/serverErrors');

// O return evita a quebra da aplicação e outras requisições podem ser feitas mesmo que seja
// retornado um erro, como o erro 500 abaixo, por exemplo.
// eslint-disable-next-line no-unused-vars, consistent-return
const errorHandler = (err, req, res, next) => {
  switch (true) {
    case (err instanceof _serverErrors.InternalServerError):
      return res.status(500).json({
        error: [err.message],
      });

    case (err instanceof _clientErrors.BadRequest):
      return res.status(400).json({
        error: [err.message],
      });

    case (err instanceof _notFound.NotFound):
      return res.status(404).json({
        error: [err.message],
      });

    case (err instanceof _forbidden.Forbidden):
      return res.status(403).json({
        error: [err.message],
      });

    case (err instanceof _authErrors.Unauthorized):
      return res.status(401).json({
        error: [err.message],
      });

    case (err instanceof _conflict.Conflict):
      return res.status(409).json({
        error: [err.message],
      });

    case (err instanceof _emailsErrors.EmailErrors):
      return res.status(500).json({
        error: ['Erro ao tentar enviar e-mail', err.name],
      });

    case (err instanceof _logErrors.LogError):
      return res.status(500).json({
        error: ['Erro ao tentar registrar log', err.name],
      });

    default:
      next(res.status(500).json({
        error: [
          err.name,
          err.stack,
          err.message,
        ],
      }));
      console.log(err);
  }
};

exports. default = errorHandler;
