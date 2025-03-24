"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _forbidden = require('../../errors/forbidden');
var _serverErrors = require('../../errors/serverErrors');
var _ExEmployeeSearch = require('../../repositories/Employee/ExEmployeeSearch'); var _ExEmployeeSearch2 = _interopRequireDefault(_ExEmployeeSearch);

class ExEmployeesSearchController {
  async SearchExEmployees(req, res, next) {
    try {
      const { headerid } = req.headers;

      if (headerid) throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');

      const exEmployeesFinder = await _ExEmployeeSearch2.default.SearchExemployees();

      if (exEmployeesFinder.length < 1) {
        return res.status(204).json('Não há ex-funcionários');
      }

      if (!exEmployeesFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(200).json(exEmployeesFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new ExEmployeesSearchController();
