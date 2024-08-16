import Employee from '../../models/Employee';
import employeeAttributes from './Attributes';

class EmployeesList {
  async List() {
    try {
      const employees = await Employee.findAll({
        attributes: employeeAttributes,
        order: [['id', 'DESC']],
      });

      return employees;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newEmployee = await Employee.create(data);
      return newEmployee;
    } catch (e) {
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const findEmployee = await Employee.findByPk(id);

      if (!findEmployee) return 'funcionário não encontrado';

      const employeeUpdate = await findEmployee.update(data);

      return employeeUpdate;
    } catch (e) {
      return console.log(e);
    }
  }

  // eslint-disable-next-line consistent-return
  async Delete(id) {
    try {
      const deleteEmployee = await Employee.findByPk(id);

      if (!deleteEmployee) return 'funcionário não registrado';

      await deleteEmployee.destroy();
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new EmployeesList();
