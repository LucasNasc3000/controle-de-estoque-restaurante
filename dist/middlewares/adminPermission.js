"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable default-case */
var _EmployeeSearchCredentials = require('../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);

exports. default = async (req, res, next) => {
  const { permission, id, adminpassword } = req.headers;

  if (!permission || !id || !adminpassword) {
    return res.status(401).json({
      errors: ['Permissao, senha de admin e id necessarios'],
    });
  }

  const employee = await _EmployeeSearchCredentials2.default.SearchById(id);

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
