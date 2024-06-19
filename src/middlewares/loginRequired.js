// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  // Das linhas 8 a 16 ocorre uma verificação da existência ou não do campo authorization no
  // cabeçalho da requisição
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login é necessário para esta operação'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.JWT_SECRET);
    const { email, id } = dados;

    // Checa se o id e o email são os mesmos que foram usados para gerar o token
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'], // Este erro quer dizer que o usuário que mudou seu próprio email precisa logar denovo porque o email não vai bater com o token
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
