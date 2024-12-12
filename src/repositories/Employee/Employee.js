import Employee from '../../models/Employee';

class EmployeesList {
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
}

export default new EmployeesList();
