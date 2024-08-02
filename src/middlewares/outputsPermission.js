/* eslint-disable default-case */
import Employee from '../repositories/Employee/EmployeeSearchCredentials';

export default async (req, res, next) => {
  const { permission, id, adminpassword } = req.headers;
  let adminPassValidator = '';

  if (!permission || !id) {
    return res.status(401).json({
      errors: ['Permissao para saidas e id necessarios'],
    });
  }

  const employee = await Employee.SearchById(id);

  if (!employee) {
    return res.status(400).json({
      errors: ['Funcionário não encontrado'],
    });
  }

  if (adminPassValidator) {
    adminPassValidator = await employee.AdminPasswordValidator(adminpassword);
  }

  switch (true) {
    case (employee.permission !== permission):
      return res.status(401).json({
        errors: ['Acesso negado, permissao para saidas necessaria'],
      });

    case (employee.permission === process.env.ADMIN_PERMISSION && adminPassValidator === true):
      return next();

    case (employee.permission === process.env.INPUTS_OUTPUTS_PERMISSION
        && employee.permission === permission):
      return next();

    case (employee.permission !== process.env.OUTPUTS_PERMISSION
          && employee.permission !== process.env.ADMIN_PERMISSION
    ):
      return res.status(401).json({
        errors: ['Acesso negado, permissao para saidas ou de administrador necessaria'],
      });
  }
  return next();
};
