import Employee from '../../models/Employee';

class EmployeesList {
  async List() {
    try {
      const employees = await Employee.findAll({
        attributes: [
          'id',
          'name',
          'email',
          'password_hash',
          'adminpassword_hash',
          'permission',
          'address_allowed',
          'created_at',
          'updated_at',
        ],
        order: [['id', 'DESC']],
      });

      if (employees.length <= 0) return null;

      return employees;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newEmployee = await Employee.create(data);

      if (!newEmployee) return null;

      return newEmployee;
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const findEmployee = await Employee.findByPk(id, {
        attributes: [
          'id',
          'name',
          'email',
          'password_hash',
          'adminpassword_hash',
          'permission',
          'address_allowed',
          'created_at',
          'updated_at',
        ],
      });

      if (!findEmployee) {
        return null;
      }

      const employeeUpdate = await findEmployee.update(data);
      return employeeUpdate;
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  // eslint-disable-next-line consistent-return
  async Delete(id) {
    try {
      const deleteEmployee = await Employee.findByPk(id);

      if (!deleteEmployee) {
        return null;
      }

      await deleteEmployee.destroy();
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  // Para ser usado apenas no desenvolvimento
  async Truncate() {
    try {
      await Employee.truncate();
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default new EmployeesList();
