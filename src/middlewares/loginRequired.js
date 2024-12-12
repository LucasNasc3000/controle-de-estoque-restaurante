// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import Employee from '../models/Employee';

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
    const employee = await Employee.findOne({
      where: {
        id,
        email,
        is_active: 1,
      },
    });

    if (!employee) {
      return res.status(401).json({
        errors: ['Funcionário inválido ou inativo'], // Este erro quer dizer que o usuário que mudou seu próprio email precisa logar denovo porque o email não vai bater com o token
      });
    }

    req.employeeId = id;
    req.employeeEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
