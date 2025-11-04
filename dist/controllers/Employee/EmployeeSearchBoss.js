"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _forbidden = require('../../errors/forbidden');
var _serverErrors = require('../../errors/serverErrors');
var _EmployeeSearchBoss = require('../../repositories/Employee/EmployeeSearchBoss'); var _EmployeeSearchBoss2 = _interopRequireDefault(_EmployeeSearchBoss);
var _EmployeeSearchCredentials = require('../../repositories/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);

class EmployeesSearchBossController {
  async SearchByBoss(req, res, next) {
    try {
      const { headerid } = req.headers;
      const { email } = req.headers;
      const { boss } = req.params;

      if (headerid) throw new (0, _forbidden.Forbidden)('Ação não autorizada para funcionários');

      const findByEmail = await _EmployeeSearchCredentials2.default.SearchByEmail(email);

      if (findByEmail.dataValues.id !== boss) throw new (0, _forbidden.Forbidden)('Ação não autorizada');

      const employeeBossFinder = await _EmployeeSearchBoss2.default.SearchByBoss(boss);

      if (employeeBossFinder === 'Não autorizado') throw new (0, _forbidden.Forbidden)('Ação não autorizada');

      if (!employeeBossFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (employeeBossFinder.length < 1) {
        return res.status(204).send('Sem registros');
      }

      return res.status(200).json(employeeBossFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByBossForListItems(req, res, next) {
    try {
      const { email } = req.headers;
      const { boss } = req.body;

      const findByEmail = await _EmployeeSearchCredentials2.default.SearchByEmail(email);

      if (findByEmail.dataValues.boss !== boss && findByEmail.dataValues.boss !== null) throw new (0, _forbidden.Forbidden)('Ação não autorizada');

      const employeeBossFinder = await _EmployeeSearchBoss2.default.SearchByBossForListItems(boss);

      if (employeeBossFinder === 'Não autorizado') throw new (0, _forbidden.Forbidden)('Ação não autorizada');

      if (!employeeBossFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      return res.status(200).json(employeeBossFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new EmployeesSearchBossController();
