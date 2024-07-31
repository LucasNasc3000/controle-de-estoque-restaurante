/* eslint-disable default-case */
import Employee from '../repositories/Employee/EmployeeSearchCredentials';

export default async (req, res, next) => {
  const { permission, id, adminpassword } = req.headers;

  if (!permission || !id || !adminpassword) {
    return res.status(401).json({
      errors: ['Permissao, senha de admin e id necessarios'],
    });
  }

  const employee = await Employee.SearchById(id);

  if (!employee) {
    return res.status(400).json({
      errors: ['Funcionário não encontrado'],
    });
  }

  const adminPassValidator = await employee.PasswordValidator(adminpassword, true);

  switch (true) {
    case (employee.permission !== permission):
      return res.status(401).json({
        errors: ['Acesso negado, permissao para administrador necessaria'],
      });

    case (employee.permission !== process.env.ADMIN_PERMISSION):
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
