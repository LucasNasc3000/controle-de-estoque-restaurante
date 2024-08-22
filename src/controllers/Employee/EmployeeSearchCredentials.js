/* eslint-disable consistent-return */
import EmployeesSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';

class EmployeesSearchCredentialsController {
  async SearchByID(req, res, next) {
    try {
      const { id } = req.params;

      const employeeIDFinder = await EmployeesSearchCredentials.SearchById(id);

      if (!employeeIDFinder) throw new NotFound('Funcionário não encontrado');

      return res.status(200).json(employeeIDFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByName(req, res, next) {
    try {
      const { name } = req.params;

      const employeeNameFinder = await EmployeesSearchCredentials.SearchByName(name);

      if (!employeeNameFinder) throw new InternalServerError('Erro interno');
      if (employeeNameFinder.length < 1) throw new NotFound('Funcionário não encontrado');

      return res.status(200).json(employeeNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmail(req, res, next) {
    try {
      const { email } = req.params;

      const employeeEmailFinder = await EmployeesSearchCredentials.SearchByEmail(email);

      if (!employeeEmailFinder) throw new InternalServerError('Erro interno');
      if (employeeEmailFinder.length < 1) throw new NotFound('Funcionário não encontrado');

      return res.status(200).json(employeeEmailFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new EmployeesSearchCredentialsController();
