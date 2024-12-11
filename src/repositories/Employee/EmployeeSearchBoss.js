import Employee from '../../models/Employee';
import employeeAttributes from './Attributes';

class EmployeesSearchBoss {
  async SearchByBoss(boss) {
    const employeeFinder = await Employee.findAll({
      where: {
        boss,
        is_active: 1,
      },
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return employeeFinder;
  }
}

export default new EmployeesSearchBoss();
