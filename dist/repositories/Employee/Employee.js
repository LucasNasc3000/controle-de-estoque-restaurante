"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Employee = require('../../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class EmployeesList {
  async List() {
    const employees = await _Employee2.default.findAll({
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return employees;
  }

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

  // eslint-disable-next-line consistent-return
  async Delete(id) {
    const deleteEmployee = await _Employee2.default.findByPk(id);

    if (!deleteEmployee) return 'funcionário não registrado';

    await deleteEmployee.destroy();
  }
}

exports. default = new EmployeesList();
