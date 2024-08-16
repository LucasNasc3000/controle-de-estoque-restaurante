import { BadRequest } from '../errors/clientErrors';
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

    default:
      next(err.name);
  }
};

export default errorHandler;
