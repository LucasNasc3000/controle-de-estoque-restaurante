/* eslint-disable default-case */
import Employee from '../repositories/Employee/EmployeeSearchCredentials';

export default async (req, res, next) => {
  const { permission, employeeid, adminpassword } = req.headers;

  if (!permission || !employeeid || !adminpassword) {
    return res.status(401).json({
      errors: ['Permissao, senha de admin e employeeid necessarios'],
    });
  }

  const employee = await Employee.SearchById(employeeid);

  if (!employee) {
    return res.status(400).json({
      errors: ['Funcionário não encontrado'],
    });
  }

  const adminPassValidator = await employee.AdminPasswordValidator(adminpassword);

  switch (true) {
    case (employee.permission !== permission):
      return res.status(401).json({
        errors: ['Acesso negado, permissao incorreta'],
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
