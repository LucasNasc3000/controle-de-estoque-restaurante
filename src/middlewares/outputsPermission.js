import Employee from '../repositories/Employee/EmployeeSearchCredentials';

export default async (req, res, next) => {
  const { permission, employeeid, adminpassword } = req.headers;
  let adminPassValidator = '';

  if (!permission || !employeeid) {
    return res.status(401).json({
      errors: ['Permissao para saidas e id necessarios'],
    });
  }

  const employee = await Employee.SearchById(employeeid);

  if (!employee) {
    return res.status(400).json({
      errors: ['Funcionário não encontrado'],
    });
  }

  if (adminpassword) {
    adminPassValidator = await employee.AdminPasswordValidator(adminpassword);
  }

  switch (true) {
    case (employee.permission !== permission):
      return res.status(401).json({
        errors: ['Acesso negado, permissao para saidas necessaria'],
      });

    case (employee.permission === process.env.ADMIN_PERMISSION
        && adminPassValidator === true
        && employee.permission === permission):
      return next();

    case (employee.permission === process.env.OUTPUTS_PERMISSION
        && employee.permission === permission):
      return next();

    case (employee.permission === process.env.INPUTS_OUTPUTS_PERMISSION
        && employee.permission === permission):
      return next();

    case (employee.permission === process.env.SO_PERMISSION
        && employee.permission === permission):
      return next();

    case (employee.permission === process.env.SOI_PERMISSION
        && employee.permission === permission):
      return next();

    default:
      return res.status(401).json({
        errors: ['Acesso negado, permissao para saidas ou de administrador necessaria'],
      });
  }
};
