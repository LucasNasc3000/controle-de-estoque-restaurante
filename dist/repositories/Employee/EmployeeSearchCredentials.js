"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Employee = require('../../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class EmployeesSearchCredentials {
  async SearchById(id) {
    const employeeFinder = await _Employee2.default.findOne({
      where: {
        id,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return employeeFinder;
  }

  async SearchByName(name) {
    const employeeFinderByName = await _Employee2.default.findAll({
      where: {
        name: { [_sequelize.Op.startsWith]: name },
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return employeeFinderByName;
  }

  async SearchOneByName(name) {
    const employeeFinderByName = await _Employee2.default.findOne({
      where: {
        name,
      },
      attributes: _Attributes2.default,
<<<<<<< HEAD
      order: [['id', 'DESC']],
=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
    });

    return employeeFinderByName;
  }

  async SearchByEmail(email) {
    const employeeFinderByEmail = await _Employee2.default.findOne({
      where: {
        email,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return employeeFinderByEmail;
  }

  async SearchByPermission(permission) {
    const employeeFinderByPermission = await _Employee2.default.findAll({
      where: {
        permission,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return employeeFinderByPermission;
  }

  async SearchByAddressAllowed() {
    // const addressAllowed = SecretsHandler('addressAllowed');
    const employeeFinderByAddressAllowed = await _Employee2.default.findAll({
      where: {
        address_allowed: process.env.ADDRESS_ALLOWED,
        is_active: 1,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return employeeFinderByAddressAllowed;
  }

  async SearchByForActives() {
    const employeeFinderActives = await _Employee2.default.findAll({
      where: {
        is_active: 1,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return employeeFinderActives;
  }
}

exports. default = new EmployeesSearchCredentials();
