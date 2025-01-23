/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { Forbidden } from '../../errors/forbidden';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import Employees from '../../repositories/Employee/Employee';
import EmployeeSearch from '../../repositories/Employee/EmployeeSearchCredentials';

class EmployeeController {
  async Store(req, res, next) {
    try {
      const { headerid } = req.headers;

      if (headerid) throw new Forbidden('Ação não autorizada para funcionários');

      const validations = Validation.MainValidations(req.body, true);
      const employeesValidations = Validation.EmployeeValidation(req.body, false, false);

      if (validations !== null) throw new BadRequest(validations);
      if (employeesValidations !== null) throw new BadRequest(employeesValidations);

      const emailExists = await EmployeeSearch.SearchByEmail(req.body.email);

      if (emailExists) throw new BadRequest('E-mail em uso, tente cadastrar outro');

      const employeeStore = await Employees.Store(req.body);

      if (!employeeStore) throw new InternalServerError('Erro interno');

      return res.status(201).json(employeeStore);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;
      const { headerid } = req.headers;

      const validations = Validation.MainValidations(req.body, true, false, false, true);
      const usersValidations = Validation.EmployeeValidation(req.body, false, true);

      if (validations !== null) throw new BadRequest(validations);
      if (usersValidations !== null) throw new BadRequest(usersValidations);

      if (req.body.email) {
        const emailExists = await EmployeeSearch.SearchByEmail(req.body.email);
        if (emailExists) throw new BadRequest('E-mail em uso');
      }

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.

      if (headerid) {
        if (headerid !== id) throw new Forbidden('Ação não autorizada para funcionários');

        if (req.body.permission
           || req.body.address_allowed
            || req.body.boss) {
          throw new Forbidden('Ação não autorizada para funcionários');
        }

        if (typeof req.body.is_active === 'string' || typeof req.body.is_active === 'number' || typeof req.body.is_active === 'boolean') {
          throw new Forbidden('Ação não autorizada para funcionários');
        }

        const employeeSelfUpdate = await Employees.Update(headerid, req.body);

        if (employeeSelfUpdate === 'funcionário não encontrado') throw new BadRequest('Funcionário não registrado');
        if (!employeeSelfUpdate) throw new InternalServerError('Erro interno');

        const empSearch = await EmployeeSearch.SearchById(id);

        return res.status(200).send(empSearch);
      }

      const employeeUpdate = await Employees.Update(id, req.body);

      if (employeeUpdate === 'funcionário não encontrado') throw new BadRequest('Funcionário não registrado');
      if (!employeeUpdate) throw new InternalServerError('Erro interno');

      const empSearch = await EmployeeSearch.SearchById(id);

      return res.status(200).send(empSearch);
    } catch (err) {
      next(err);
    }
  }
}

export default new EmployeeController();
