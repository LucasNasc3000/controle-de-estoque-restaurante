import User from "../repositories/User/UserSearchCredentials";

export default async (req, res, next) => {
  const { permission, id } = req.headers;

  if (!permission || !id) {
    return res.status(401).json({
      errors: ['Permissao outputsCRS e id necessarios'],
    });
  }

  const user = await User.SearchById(id);

  if(!user) {
    return res.status(400).json({
        errors: ['Usuário não encontrado'],
    });
  }

  if(user[0].dataValues.permission !== permission) {
    return res.status(401).json({
      errors: ['Acesso negado, permissao outputsCRS necessaria'],
    });
  }
  return next();
}
