/* eslint-disable default-case */
import UserRepo from '../repositories/User/UserSearchCredentials';

export default async (req, res, next) => {
  const { permission, id, adminpassword } = req.headers;

  if (!permission || !id || !adminpassword) {
    return res.status(401).json({
      errors: ['Permissao, senha de admin e id necessarios'],
    });
  }

  const user = await UserRepo.SearchById(id);

  if (!user) {
    return res.status(400).json({
      errors: ['Usuário não encontrado'],
    });
  }

  const adminPassValidator = await user.PasswordValidator(adminpassword, true);

  switch (true) {
    case (user.permission !== permission):
      return res.status(401).json({
        errors: ['Acesso negado, permissao para administrador necessaria'],
      });

    case (user.permission !== process.env.ADMIN_PERMISSION):
      return res.status(401).json({
        errors: ['Acesso negado, permissao para administrador necessaria'],
      });

    case (!adminPassValidator):
      return res.status(401).json({
        errors: ['Senha incorreta'],
      });
  }
  return next();
};
