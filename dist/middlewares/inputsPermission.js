"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _EmployeeSearchCredentials = require('../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);

exports. default = async (req, res, next) => {
  const { permission, id, adminpassword } = req.headers;
  let adminPassValidator = false;

  if (!permission || !id) {
    return res.status(401).json({
      errors: ['Permissao para insumos e id necessarios'],
    });
  }

  const employee = await _EmployeeSearchCredentials2.default.SearchById(id);

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

    case (employee.permission === process.env.INPUTS_PERMISSION
          && employee.permission === permission):
      return next();

    case (employee.permission === process.env.INPUTS_OUTPUTS_PERMISSION
          && employee.permission === permission):
      return next();

    case (employee.permission === process.env.SOI_PERMISSION
          && employee.permission === permission):
      return next();

    default:
      return res.status(401).json({
        errors: ['Acesso negado, permissao para insumos ou de administrador necessaria'],
      });
  }
};
