/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import Employee from '../models/Employee';
import Log from '../Logs/LogRegister';
import { BadRequest } from '../errors/clientErrors';
import { Unauthorized } from '../errors/authErrors';

class TokenController {
  // Cria o JWT baseado no email e senha que o usuário enviar no front-end para fazer login.
  // É feita uma pesquisa com o email enviado para verificar se ele existe, depois uma validação
  // de senha. Se ambos os dados forem confirmados o JWT é gerado para o usuário.
  async Store(req, res, next) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) throw new BadRequest('Email e senha necessários para logar');

      const employee = await Employee.findOne({ where: { email } });

      if (!employee) throw new Unauthorized('O usuário não existe');

      if (!(await employee.PasswordValidator(password))) throw new Unauthorized('Senha inválida');

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
