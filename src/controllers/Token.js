// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Log from '../repositories/User/Log';

class TokenController {
  // Cria o JWT baseado no email e senha que o usuário enviar no front-end para fazer login.
  // É feita uma pesquisa com o email enviado para verificar se ele existe, depois uma validação
  // de senha. Se ambos os dados forem confirmados o JWT é gerado para o usuário.
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['O usuário não existe'],
      });
    }

    if (!(await user.PasswordValidator(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    await this.createLog(id, email);

    return res.json({ token, user: { nome: user.nome, id, email } });
  }

  setLogData() {
    const data = new Date();
    const dateTime = [];

    const logTime = data.toLocaleTimeString("pt-BR", {
      hour12: false,
    });

    const logDate = data.toLocaleDateString('pt-BR', {
      dateStyle: "long",
    });

    dateTime.push(logDate, logTime);
    return dateTime;
  }

  async createLog(id, email) {
    const logDateTime = this.setLogData();
    await Log.Store(id, email, logDateTime);
  }
}

export default new TokenController();
