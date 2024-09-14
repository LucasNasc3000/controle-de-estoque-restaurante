/* eslint-disable consistent-return */
/* eslint-disable default-case */
import Employee from '../repositories/Employee/EmployeeSearchCredentials';
import { Unauthorized } from '../errors/authErrors';
import { BadRequest } from '../errors/clientErrors';

export default async (req, res, next) => {
  try {
    const { permission, employeeid, adminpassword } = req.headers;

    if (!permission || !employeeid || !adminpassword) {
      throw new Unauthorized('Permissao, senha de admin e employeeid necessarios');
    }

    const employee = await Employee.SearchById(employeeid);

    if (!employee) {
      throw new BadRequest('Funcionário não encontrado');
    }

    const adminPassValidator = await employee.AdminPasswordValidator(adminpassword);

    switch (true) {
      case (employee.permission !== permission):
        throw new Unauthorized('Acesso negado, permissao incorreta');

      case (employee.permission !== process.env.ADMIN_PERMISSION):
        throw new Unauthorized('Acesso negado, permissao para administrador necessaria');

      case (!adminPassValidator):
        throw new Unauthorized('Senha incorreta');
    }
    return next();
  } catch (err) {
    next(err);
  }
};
