/* eslint-disable consistent-return */
import Employee from '../repositories/Employee/EmployeeSearchCredentials';
import { Unauthorized } from '../errors/authErrors';
import { BadRequest } from '../errors/clientErrors';

export default async (req, res, next) => {
  try {
    const { permission, employeeid, adminpassword } = req.headers;
    let adminPassValidator = false;

    if (!permission || !employeeid) {
      throw new Unauthorized('Permissao para insumos e id necessarios');
    }

    const employee = await Employee.SearchById(employeeid);

    if (!employee) {
      throw new BadRequest('Funcionário não encontrado');
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
