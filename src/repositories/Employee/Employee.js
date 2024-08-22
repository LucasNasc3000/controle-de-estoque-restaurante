import Employee from '../../models/Employee';
import employeeAttributes from './Attributes';

class EmployeesList {
  async List() {
    const employees = await Employee.findAll({
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return employees;
  }

  async Store(data) {
    const newEmployee = await Employee.create(data);
    return newEmployee;
  }

  async Update(id, data) {
    const findEmployee = await Employee.findByPk(id);

    if (!findEmployee) return 'funcionário não encontrado';

    const employeeUpdate = await findEmployee.update(data);

    return employeeUpdate;
  }

  // eslint-disable-next-line consistent-return
  async Delete(id) {
    const deleteEmployee = await Employee.findByPk(id);

    if (!deleteEmployee) return 'funcionário não registrado';

    await deleteEmployee.destroy();
  }
}

export default new EmployeesList();
