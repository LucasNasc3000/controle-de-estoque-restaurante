import { Op } from 'sequelize';
import Employee from '../../models/Employee';

class EmployeesSearchCredentials {
  async SearchById(id) {
    try {
      const employeeFinder = await Employee.findOne({
        where: {
          id: { [Op.like]: `%${id}%` },
        },
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

      if (employeeFinder.length <= 0) return null;

      return employeeFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const employeeFinderByName = await Employee.findAll({
        where: {
          name: { [Op.like]: `%${name}%` },
        },
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

      if (!employeeFinderByName) {
        return null;
      }

      return employeeFinderByName;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByEmail(email) {
    try {
      const employeeFinderByEmail = await Employee.findAll({
        where: {
          email: { [Op.like]: `%${email}%` },
        },
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

      if (!employeeFinderByEmail) {
        return null;
      }

      return employeeFinderByEmail;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new EmployeesSearchCredentials();
