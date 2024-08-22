import { Op } from 'sequelize';
import Employee from '../../models/Employee';
import employeeAttributes from './Attributes';

class EmployeesSearchCredentials {
  async SearchById(id) {
    const employeeFinder = await Employee.findOne({
      where: {
        id,
      },
      attributes: employeeAttributes,
    });

    return employeeFinder;
  }

  async SearchByName(name) {
    const employeeFinderByName = await Employee.findAll({
      where: {
        name: { [Op.startsWith]: name },
      },
      attributes: employeeAttributes,
    });

    return employeeFinderByName;
  }

  async SearchByEmail(email) {
    const employeeFinderByEmail = await Employee.findAll({
      where: {
        email,
      },
      attributes: employeeAttributes,
    });

    return employeeFinderByEmail;
  }

  async SearchByAddressAllowed() {
    const employeeFinderByAddressAllowed = await Employee.findAll({
      where: {
        address_allowed: process.env.ADDRESS_ALLOWED,
      },
      attributes: employeeAttributes,
    });

    return employeeFinderByAddressAllowed;
  }
}

export default new EmployeesSearchCredentials();
