/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { Unauthorized } from '../errors/authErrors';
import { BadRequest } from '../errors/clientErrors';
import Employee from '../repositories/Employee/EmployeeSearchCredentials';

export default async (req, res, next) => {
  try {
    const { permission, email, adminpassword } = req.headers;

    if (!permission || !email || !adminpassword) {
      throw new Unauthorized('Permissao, senha de admin e email necessarios');
    }

    const employee = await Employee.SearchByEmail(email);

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
