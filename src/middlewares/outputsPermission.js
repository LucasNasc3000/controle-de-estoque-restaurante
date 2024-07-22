import User from "../repositories/User/UserSearchCredentials";

export default async (req, res, next) => {
  const { permission, id, adminpassword } = req.headers;

  if (!permission || !id) {
    return res.status(401).json({
      errors: ['Permissao para saidas e id necessarios'],
    });
  }

  const user = await User.SearchById(id);

  if(!user) {
    return res.status(400).json({
        errors: ['Usuário não encontrado'],
    });
  }

  const adminPassValidator = await user.PasswordValidator(adminpassword, true);

  switch(true) {
    case (user.permission !== permission):
      return res.status(401).json({
        errors: ['Acesso negado, permissao para saidas necessaria'],
      });

    case (user.permission === process.env.ADMIN_PERMISSION && adminPassValidator === true):
      return next();

    case (user.permission !== process.env.OUTPUTS_PERMISSION):
      return res.status(401).json({
        errors: ['Acesso negado, permissao para saidas necessaria'],
      });
  }
  return next();
}
