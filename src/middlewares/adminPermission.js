/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { Unauthorized } from '../errors/authErrors';
import { BadRequest } from '../errors/clientErrors';
import Employee from '../models/Employee';

export default async (req, res, next) => {
  try {
    const {
      permission, email, adminpassword, headerid,
    } = req.headers;

    if (!permission || !email || !adminpassword) {
      throw new Unauthorized('Permissao, senha de admin e email necessarios');
    }

    if (headerid) {
      const employeeById = await Employee.findOne({
        where: {
          id: headerid,
          is_active: 1,
        },
      });

      if (!employeeById) throw new Unauthorized('O funcionário não existe');
    }

    const employee = await Employee.findOne({
      where: {
        email,
        is_active: 1,
      },
    });

    if (!employee) {
      throw new BadRequest('Funcionário não encontrado ou inativo');
    }

    const adminPassValidator = await employee.AdminPasswordValidator(adminpassword);

    switch (true) {
      case (employee.permission !== permission):
        throw new Unauthorized('Acesso negado, permissao incorreta');

      case (headerid && employee.permission !== process.env.ADMIN_PERMISSION):
        return next();

      case (employee.permission !== process.env.ADMIN_PERMISSION && !headerid):
        throw new Unauthorized('Acesso negado, permissao para administrador necessaria');

      case (!adminPassValidator):
        throw new Unauthorized('Senha incorreta');
    }
    return next();
  } catch (err) {
    next(err);
  }
};
