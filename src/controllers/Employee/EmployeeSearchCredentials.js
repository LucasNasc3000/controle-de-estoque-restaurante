/* eslint-disable consistent-return */
import EmployeesSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';
import { BadRequest } from '../../errors/clientErrors';

class EmployeesSearchCredentialsController {
  async SearchByID(req, res, next) {
    try {
      const { id } = req.params;

      const employeeIDFinder = await EmployeesSearchCredentials.SearchById(id);

      if (!employeeIDFinder) throw new BadRequest('Funcionário não encontrado');

      return res.status(200).json(employeeIDFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByName(req, res, next) {
    try {
      const { name } = req.params;

      const employeeNameFinder = await EmployeesSearchCredentials.SearchByName(name);

      if (!employeeNameFinder) throw new BadRequest('Funcionário não encontrado');

      return res.status(200).json(employeeNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmail(req, res, next) {
    try {
      const { email } = req.params;

      const employeeEmailFinder = await EmployeesSearchCredentials.SearchByEmail(email);

      if (!employeeEmailFinder) throw new BadRequest('Funcionário não encontrado');

      return res.status(200).json(employeeEmailFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new EmployeesSearchCredentialsController();
