import { BadRequest } from '../errors/clientErrors';
// import { InternalServerError } from '../errors/serverErrors';

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (err instanceof BadRequest) {
    return res.status(400).json({
      error: [err.message],
    });
  }

  return res.json({
    errors: ['Erro interno'],
  });
};

export default errorHandler;
