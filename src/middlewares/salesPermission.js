import Employee from '../repositories/Employee/EmployeeSearchCredentials';

// eslint-disable-next-line consistent-return
export default async (req, res, next) => {
  const { permission, employeeid, adminpassword } = req.headers;
  let adminPassValidator = '';

  if (!permission || !employeeid) {
    return res.status(401).json({
      errors: ['Permissao para vendas e id necessarios'],
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
    case (employee.permission === process.env.ADMIN_PERMISSION
          && adminPassValidator === true
          && employee.permission === permission):
      return next();

    case (employee.permission === process.env.SALES_PERMISSION
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
        errors: ['Acesso negado, permissao para vendas ou de administrador necessaria'],
      });
  }
};
