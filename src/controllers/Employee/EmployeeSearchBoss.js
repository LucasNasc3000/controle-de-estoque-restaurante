/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import EmployeeSearchBoss from '../../repositories/Employee/EmployeeSearchBoss';

class EmployeesSearchBossController {
  async SearchByBoss(req, res, next) {
    try {
      const { boss } = req.params;

      const employeeBossFinder = await EmployeeSearchBoss.SearchByBoss(boss);

      if (!employeeBossFinder) throw new NotFound('Funcionário não encontrado');

      return res.status(200).json(employeeBossFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new EmployeesSearchBossController();
