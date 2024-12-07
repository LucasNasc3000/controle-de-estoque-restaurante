import Employee from '../../models/Employee';
import employeeAttributes from './Attributes';

class EmployeesSearchBoss {
  async SearchByBoss(boss) {
    const employeeFinder = await Employee.findAll({
      where: {
        boss,
      },
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return employeeFinder;
  }
}

export default new EmployeesSearchBoss();
