import Employees from '../../repositories/Employee/Employee';
import Validation from '../../validations/Validation';

class EmployeeController {
  async store(req, res) {
    const validations = Validation.MainValidations(req.body, true);
    const emlpoyeesValidations = Validation.EmployeeValidation(req.body);

    if (validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if (emlpoyeesValidations !== null) {
      return res.status(500).json({
        errors: [emlpoyeesValidations],
      });
    }

    const emlpoyeeStore = await Employees.Store(req.body);

    return res.status(201).json(emlpoyeeStore);
  }

  async index(req, res) {
    const employeesList = await Employees.List();

    if (employeesList === null) {
      return res.status(400).json({
        errors: ['Ocorreu um erro interno ou não há funcionários cadastrados'],
      });
    }

    return res.status(200).send(employeesList);
  }

  async update(req, res) {
    const { id } = req.params;
    const validations = Validation.MainValidations(req.body, true);
    const usersValidations = Validation.EmployeeValidation(req.body);

    if (validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if (usersValidations !== null) {
      return res.status(500).json({
        errors: [usersValidations],
      });
    }

    if (!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
    // requisições como insomnia.
    const employeeUpdate = await Employees.Update(id, req.body);

    if (employeeUpdate === null) {
      return res.status(400).json({
        errors: ['Funcionário não registrado'],
      });
    }

    return res.status(200).send(employeeUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const employeeDelete = await Employees.Delete(id);

    if (employeeDelete === null) {
      return res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }

    return res.json(`Funcionário ${id} deletado`);
  }

  async DeleteAll(req, res) {
    const employeeTruncate = Employees.Truncate();

    if (employeeTruncate === false) {
      return res.status(400).json({
        errors: ['Ocoreru um erro'],
      });
    }

    return res.json('Funcionários deletados');
  }
}

export default new EmployeeController();
