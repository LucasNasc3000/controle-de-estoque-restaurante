/* eslint-disable consistent-return */
import { Forbidden } from '../../errors/forbidden';
import { NotFound } from '../../errors/notFound';
import EmployeeSearchBoss from '../../repositories/Employee/EmployeeSearchBoss';
import EmployeeSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';

class EmployeesSearchBossController {
  async SearchByBoss(req, res, next) {
    try {
      const { headerid } = req.headers;
      const { boss } = req.params;

      if (headerid) {
        const empSearch = await EmployeeSearchCredentials.SearchById(headerid);

        if (empSearch.dataValues.boss !== boss) throw new Forbidden('Ação não autorizada para funcionários');

        const employeeOwnBossFinder = await EmployeeSearchBoss.SearchByBoss(boss);

        if (!employeeOwnBossFinder) throw new NotFound('Chefe não encontrado');

        return res.status(200).json(employeeOwnBossFinder);
      }

      const employeeBossFinder = await EmployeeSearchBoss.SearchByBoss(boss);

      if (!employeeBossFinder) throw new NotFound('Chefe não encontrado');

      return res.status(200).json(employeeBossFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new EmployeesSearchBossController();
