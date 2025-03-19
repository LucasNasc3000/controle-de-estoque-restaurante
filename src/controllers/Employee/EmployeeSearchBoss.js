/* eslint-disable consistent-return */
import { Forbidden } from '../../errors/forbidden';
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import EmployeeSearchBoss from '../../repositories/Employee/EmployeeSearchBoss';
import EmployeesSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';

class EmployeesSearchBossController {
  async SearchByBoss(req, res, next) {
    try {
      const { headerid } = req.headers;
      const { email } = req.headers;
      const { boss } = req.params;

      if (headerid) throw new Forbidden('Ação não autorizada para funcionários');

      const findByEmail = await EmployeesSearchCredentials.SearchByEmail(email);

      if (findByEmail.dataValues.id !== boss) throw new Forbidden('Ação não autorizada');

      const employeeBossFinder = await EmployeeSearchBoss.SearchByBoss(boss);

      if (employeeBossFinder === 'Não autorizado') throw new Forbidden('Ação não autorizada');

      if (!employeeBossFinder) throw new InternalServerError('Erro interno');

      if (employeeBossFinder.length < 1) throw new NotFound('Chefe não encontrado');

      return res.status(200).json(employeeBossFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByBossForListItems(req, res, next) {
    try {
      const { headerid } = req.headers;
      const { boss } = req.body;

      if (headerid) throw new Forbidden('Ação não autorizada para funcionários');

      const employeeBossFinder = await EmployeeSearchBoss.SearchByBossForListItems(boss);

      if (employeeBossFinder === 'Não autorizado') throw new Forbidden('Ação não autorizada');

      if (!employeeBossFinder) throw new InternalServerError('Erro interno');

      return res.status(200).json(employeeBossFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new EmployeesSearchBossController();
