import User from "../repositories/User/UserSearchCredentials";

export default async (req, res, next) => {
  const { permission, id } = req.headers;

  if (!permission || !id) {
    return res.status(401).json({
      errors: ['Permissao para insumos e id necessarios'],
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
        errors: ['Acesso negado, permissao para insumos necessaria'],
      });

    case (user.permission !== process.env.INPUTS_PERMISSION):
      return res.status(401).json({
        errors: ['Acesso negado, permissao para insumos necessaria'],
      });

    case (user.permission === process.env.ADMIN_PERMISSION && adminPassValidator === true):
      return next();
  }
  return next();
}
