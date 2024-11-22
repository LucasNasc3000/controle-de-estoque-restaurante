/* eslint-disable consistent-return */
import { BadRequest } from '../../errors/clientErrors';
import { InternalServerError } from '../../errors/serverErrors';
import Validation from '../../middlewares/fieldValidations/Validation';
import Employees from '../../repositories/Employee/Employee';
import EmployeeSearch from '../../repositories/Employee/EmployeeSearchCredentials';

class EmployeeController {
  async Store(req, res, next) {
    try {
      const validations = Validation.MainValidations(req.body, true);
      const employeesValidations = Validation.EmployeeValidation(req.body, false, false);

      if (validations !== null) throw new BadRequest(validations);
      if (employeesValidations !== null) throw new BadRequest(employeesValidations);

      const emailExists = await EmployeeSearch.SearchByEmail(req.body.email);

      if (emailExists.length > 0) throw new BadRequest('E-mail em uso, tente cadastrar outro');

      const employeeStore = await Employees.Store(req.body);

      if (!employeeStore) throw new InternalServerError('Erro interno');

      return res.status(201).json(employeeStore);
    } catch (err) {
      next(err);
    }
  }

  async Index(req, res, next) {
    try {
      const employeesList = await Employees.List();

      if (!employeesList) throw new InternalServerError('Erro interno');
      if (employeesList.length < 1) throw new InternalServerError('Não há funcionários cadastrados.');

      return res.status(200).json(employeesList);
    } catch (err) {
      next(err);
    }
  }

  async Update(req, res, next) {
    try {
      const { id } = req.params;
      const validations = Validation.MainValidations(req.body, true, false, false, true);
      const usersValidations = Validation.EmployeeValidation(req.body, true);

      if (validations !== null) throw new BadRequest(validations);
      if (usersValidations !== null) throw new BadRequest(usersValidations);

      if (req.body.email) {
        const emailExists = await EmployeeSearch.SearchByEmail(req.body.email);
        if (emailExists.length > 0) throw new BadRequest('E-mail em uso, tente cadastrar outro');
      }

      // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
      // requisições como insomnia.
      const employeeUpdate = await Employees.Update(id, req.body);

      if (employeeUpdate === 'funcionário não encontrado') throw new BadRequest('Funcionário não registrado');
      if (!employeeUpdate) throw new InternalServerError('Erro interno');

      return res.status(200).send(employeeUpdate);
    } catch (err) {
      next(err);
    }
  }

  async Delete(req, res, next) {
    try {
      const { id } = req.params;

      const employeeDelete = await Employees.Delete(id);

      if (employeeDelete === 'funcionário não registrado') throw new BadRequest('Funcionário não registrado');
      if (!employeeDelete) throw new InternalServerError('Erro interno');

      return res.status(200).json(`Funcionário ${id} deletado`);
    } catch (err) {
      next(err);
    }
  }
}

export default new EmployeeController();
