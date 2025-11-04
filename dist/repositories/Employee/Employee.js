"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Employee = require('../../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);

class EmployeesList {
  async Store(data) {
    const newEmployee = await _Employee2.default.create(data);
    return newEmployee;
  }

  async Update(id, data) {
    const findEmployee = await _Employee2.default.findByPk(id);

    if (!findEmployee) return 'funcionário não encontrado';

    const employeeUpdate = await findEmployee.update(data);

    return employeeUpdate;
  }
}

exports. default = new EmployeesList();
