import { Op } from 'sequelize';
import Employee from '../../models/Employee';
import employeeAttributes from './Attributes';

class EmployeesSearchCredentials {
  async SearchById(id) {
    try {
      const employeeFinder = await Employee.findOne({
        where: {
          id,
        },
        attributes: employeeAttributes,
      });

      return employeeFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const employeeFinderByName = await Employee.findAll({
        where: {
          name: { [Op.startsWith]: name },
        },
        attributes: employeeAttributes,
      });

      return employeeFinderByName;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByEmail(email) {
    try {
      const employeeFinderByEmail = await Employee.findAll({
        where: {
          email,
        },
        attributes: employeeAttributes,
      });

      return employeeFinderByEmail;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByAddressAllowed() {
    try {
      const employeeFinderByAddressAllowed = await Employee.findAll({
        where: {
          address_allowed: process.env.ADDRESS_ALLOWED,
        },
        attributes: employeeAttributes,
      });

      return employeeFinderByAddressAllowed;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new EmployeesSearchCredentials();
