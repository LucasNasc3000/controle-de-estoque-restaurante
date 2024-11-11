/* eslint-disable consistent-return */
import { Unauthorized } from '../errors/authErrors';
import { BadRequest } from '../errors/clientErrors';
import Employee from '../repositories/Employee/EmployeeSearchCredentials';

export default async (req, res, next) => {
  try {
    const { permission, email, adminpassword } = req.headers;
    let adminPassValidator = '';

    if (!permission || !email) {
      throw new Unauthorized('Permissao para saidas e id necessarios');
    }

    const employee = await Employee.SearchByEmail(email);

    if (!employee) {
      throw new BadRequest('Funcionário não encontrado');
    }

    if (adminpassword) {
      adminPassValidator = await employee.AdminPasswordValidator(adminpassword);
    }

    switch (true) {
      case (employee.permission !== permission):
        throw new Unauthorized('Acesso negado, permissao para saidas necessaria');

      case (employee.permission === process.env.ADMIN_PERMISSION
        && adminPassValidator === true
        && employee.permission === permission):
        return next();

      case (employee.permission === process.env.OUTPUTS_PERMISSION
        && employee.permission === permission):
        return next();

      case (employee.permission === process.env.INPUTS_OUTPUTS_PERMISSION
        && employee.permission === permission):
        return next();

      case (employee.permission === process.env.SO_PERMISSION
        && employee.permission === permission):
        return next();

      case (employee.permission === process.env.SOI_PERMISSION
        && employee.permission === permission):
        return next();

      default:
        throw new Unauthorized('Acesso negado, permissao para saidas ou de administrador necessaria');
    }
  } catch (err) {
    next(err);
  }
};
