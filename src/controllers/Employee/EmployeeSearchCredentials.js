/* eslint-disable consistent-return */
import { Forbidden } from '../../errors/forbidden';
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import EmployeesSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';

class EmployeesSearchCredentialsController {
  async SearchByID(req, res, next) {
    try {
      const { headerid } = req.headers;

      if (headerid) throw new Forbidden('Ação não autorizada para funcionários');

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
      const { headerid } = req.headers;

      if (headerid) throw new Forbidden('Ação não autorizada para funcionários');

      const { name } = req.params;

      const employeeNameFinder = await EmployeesSearchCredentials.SearchByName(name);

      if (!employeeNameFinder) throw new InternalServerError('Erro interno');
      if (employeeNameFinder.length < 1) throw new NotFound('Funcionário não encontrado');

      return res.status(200).json(employeeNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchOneByName(req, res, next) {
    try {
      const { headerid } = req.headers;

      if (headerid) throw new Forbidden('Ação não autorizada para funcionários');

      const { uniquename } = req.params;

      const employeeNameFinder = await EmployeesSearchCredentials.SearchOneByName(uniquename);

      if (!employeeNameFinder) throw new NotFound('Funcionário não encontrado');

      return res.status(200).json(employeeNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmail(req, res, next) {
    try {
      const { headerid, email } = req.headers;
      const { emailParam } = req.params;

      if (headerid) {
        if (email !== emailParam) throw new Forbidden('Ação não autorizada para funcionários');

        const employeeSelfEmailFinder = await EmployeesSearchCredentials.SearchByEmail(emailParam);

        if (!employeeSelfEmailFinder) throw new NotFound('Funcionário não encontrado');

        return res.status(200).json(employeeSelfEmailFinder);
      }

      const employeeEmailFinder = await EmployeesSearchCredentials.SearchByEmail(emailParam);

      if (!employeeEmailFinder) throw new NotFound('Funcionário não encontrado');

      return res.status(200).json(employeeEmailFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new EmployeesSearchCredentialsController();
