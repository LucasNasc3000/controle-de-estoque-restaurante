/* eslint-disable consistent-return */
import { Unauthorized } from '../errors/authErrors';
import { BadRequest } from '../errors/clientErrors';
import Employee from '../models/Employee';

export default async (req, res, next) => {
  try {
    const { permission, email, adminpassword } = req.headers;
    let adminPassValidator = false;

    if (!permission || !email) {
      throw new Unauthorized('Permissao para insumos e id necessarios');
    }

    const employee = await Employee.findOne({
      where: {
        email,
        permission,
        is_active: 1,
      },
    });

    if (!employee) {
      throw new BadRequest('Funcionário não encontrado ou inativo');
    }

    if (adminpassword) {
      adminPassValidator = await employee.AdminPasswordValidator(adminpassword);
    }

    switch (true) {
      case (employee.permission === process.env.ADMIN_PERMISSION
        && adminPassValidator === true
        && employee.permission === permission):
        return next();

      case (employee.permission === process.env.INPUTS_PERMISSION
          && employee.permission === permission):
        return next();

      case (employee.permission === process.env.INPUTS_OUTPUTS_PERMISSION
          && employee.permission === permission):
        return next();

      case (employee.permission === process.env.SOI_PERMISSION
          && employee.permission === permission):
        return next();

      default:
        throw new Unauthorized('Acesso negado, permissao para insumos ou de administrador necessaria');
    }
  } catch (err) {
    next(err);
  }
};
