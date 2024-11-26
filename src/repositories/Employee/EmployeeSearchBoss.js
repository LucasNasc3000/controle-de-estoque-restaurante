import Employee from '../../models/Employee';
import employeeAttributes from './Attributes';

class EmployeesSearchBoss {
  async SearchByBoss(boss) {
    const employeeFinder = await Employee.findOne({
      where: {
        boss,
      },
      attributes: employeeAttributes,
    });

    return employeeFinder;
  }
}

export default new EmployeesSearchBoss();
