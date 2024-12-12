import { Unauthorized } from '../errors/authErrors';
import { BadRequest } from '../errors/clientErrors';
import { EmailErrors } from '../errors/emailsErrors';
import { Forbidden } from '../errors/forbidden';
import { LogError } from '../errors/logErrors';
import { NotFound } from '../errors/notFound';
import { InternalServerError } from '../errors/serverErrors';

// O return evita a quebra da aplicação e outras requisições podem ser feitas mesmo que seja
// retornado um erro, como o erro 500 abaixo, por exemplo.
// eslint-disable-next-line no-unused-vars, consistent-return
const errorHandler = (err, req, res, next) => {
  switch (true) {
    case (err instanceof InternalServerError):
      return res.status(500).json({
        error: [err.message],
      });

    case (err instanceof BadRequest):
      return res.status(400).json({
        error: [err.message],
      });

    case (err instanceof NotFound):
      return res.status(404).json({
        error: [err.message],
      });

    case (err instanceof Forbidden):
      return res.status(403).json({
        error: [err.message],
      });

    case (err instanceof Unauthorized):
      return res.status(401).json({
        error: [err.message],
      });

    case (err instanceof EmailErrors):
      return res.status(500).json({
        error: [err.name],
      });

    case (err instanceof LogError):
      return res.status(500).json({
        error: [err.name],
      });

    default:
      next(err.message);
  }
};

export default errorHandler;
