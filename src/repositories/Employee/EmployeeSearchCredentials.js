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
      order: [['id', 'DESC']],
    });

    return employeeFinder;
  }

  async SearchByName(name) {
    const employeeFinderByName = await Employee.findAll({
      where: {
        name: { [Op.startsWith]: name },
      },
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return employeeFinderByName;
  }

  async SearchOneByName(name) {
    const employeeFinderByName = await Employee.findOne({
      where: {
        name,
      },
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return employeeFinderByName;
  }

  async SearchByEmail(email) {
    const employeeFinderByEmail = await Employee.findOne({
      where: {
        email,
      },
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return employeeFinderByEmail;
  }

  async SearchByPermission(permission) {
    const employeeFinderByPermission = await Employee.findAll({
      where: {
        permission,
      },
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return employeeFinderByPermission;
  }

  async SearchByAddressAllowed() {
    // const addressAllowed = SecretsHandler('addressAllowed');
    const employeeFinderByAddressAllowed = await Employee.findAll({
      where: {
        address_allowed: process.env.ADDRESS_ALLOWED,
        is_active: 1,
      },
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return employeeFinderByAddressAllowed;
  }

  async SearchByForActives() {
    const employeeFinderActives = await Employee.findAll({
      where: {
        is_active: 1,
      },
      attributes: employeeAttributes,
      order: [['id', 'DESC']],
    });

    return employeeFinderActives;
  }
}

export default new EmployeesSearchCredentials();
