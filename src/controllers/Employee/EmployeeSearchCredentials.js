import EmployeesSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';

class EmployeesSearchCredentialsController {
  async SearchByID(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const employeeIDFinder = await EmployeesSearchCredentials.SearchById(id);

    if (!employeeIDFinder) {
      return res.status(400).json({
        errors: ['Funcionário não encontrado'],
      });
    }

    return res.json(employeeIDFinder);
  }

  async SearchByName(req, res) {
    const { name } = req.params;

    if (!name) {
      return res.status(500).json({
        errors: ['Nome não informado'],
      });
    }

    const employeeNameFinder = await EmployeesSearchCredentials.SearchByName(name);

    if (!employeeNameFinder) {
      return res.status(400).json({
        errors: ['Funcionário não encontrada'],
      });
    }

    return res.json(employeeNameFinder);
  }

  async SearchByEmail(req, res) {
    const { email } = req.params;

    if (!email) {
      return res.status(500).json({
        errors: ['Email não informado'],
      });
    }

    const employeeEmailFinder = await EmployeesSearchCredentials.SearchByEmail(email);

    if (!employeeEmailFinder) {
      return res.status(400).json({
        errors: ['Funcionário não encontrado'],
      });
    }

    return res.json(employeeEmailFinder);
  }
}

export default new EmployeesSearchCredentialsController();
