import Employee from '../../models/Employee';
import employeeAttributes from './Attributes';

class ExEmployeesSearch {
  async SearchExemployees() {
    const exEmployeesFinder = await Employee.findAll({
      where: {
        is_active: 0,
      },
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return exEmployeesFinder;
  }
}

export default new ExEmployeesSearch();
