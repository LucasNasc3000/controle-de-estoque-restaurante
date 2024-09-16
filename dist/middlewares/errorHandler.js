"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _clientErrors = require('../errors/clientErrors');
var _serverErrors = require('../errors/serverErrors');
var _notFound = require('../errors/notFound');
var _emailsErrors = require('../errors/emailsErrors');
var _logErrors = require('../errors/logErrors');
var _authErrors = require('../errors/authErrors');

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

    case (err instanceof _authErrors.Unauthorized):
      return res.status(401).json({
        error: [err.message],
      });

    case (err instanceof _emailsErrors.EmailErrors):
      return res.status(500).json({
        error: [err.name],
      });

    case (err instanceof _logErrors.LogError):
      return res.status(500).json({
        error: [err.name],
      });

    default:
      next(err.message);
  }
};

exports. default = errorHandler;
