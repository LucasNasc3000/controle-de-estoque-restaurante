/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import Log from '../Logs/LogRegister';
import { Unauthorized } from '../errors/authErrors';
import { BadRequest } from '../errors/clientErrors';
import Employee from '../models/Employee';

class TokenController {
  async Store(req, res, next) {
    try {
      const {
        email = '', password = '', adminpassword = '', permission = '',
      } = req.body;

      if (!email || !password || !adminpassword || !permission) throw new BadRequest('Email, senha, senha de admin e permissao necessários para logar');

      const employee = await Employee.findOne({ where: { email, is_active: 1 } });

      // eslint-disable-next-line default-case
      switch (true) {
        case !employee:
          throw new Unauthorized('O funcionário não existe ou está inativo');

        case !(await employee.PasswordValidator(password)):
          throw new Unauthorized('Senha inválida');

        case !(await employee.AdminPasswordValidator(adminpassword)):
          throw new Unauthorized('Senha de administrador inválida');

        case permission !== employee.permission:
          throw new Unauthorized('Permissão incorreta');
      }

      const { id } = employee;

      const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
      });

      await Log.createLog(id, email);

      return res.json({ token, employee: { nome: employee.name, id, email } });
    } catch (err) {
      next(err);
    }
  }
}

export default new TokenController();
