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
    });

    return employeeFinder;
  }

  async SearchByName(name) {
    const employeeFinderByName = await _Employee2.default.findAll({
      where: {
        name: { [_sequelize.Op.startsWith]: name },
      },
      attributes: _Attributes2.default,
    });

    return employeeFinderByName;
  }

  async SearchByEmail(email) {
    const employeeFinderByEmail = await _Employee2.default.findAll({
      where: {
        email,
      },
      attributes: _Attributes2.default,
    });

    return employeeFinderByEmail;
  }

  async SearchByAddressAllowed() {
    const employeeFinderByAddressAllowed = await _Employee2.default.findAll({
      where: {
        address_allowed: process.env.ADDRESS_ALLOWED,
      },
      attributes: _Attributes2.default,
    });

    return employeeFinderByAddressAllowed;
  }
}

exports. default = new EmployeesSearchCredentials();
