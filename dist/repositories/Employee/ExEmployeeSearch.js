"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Employee = require('../../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class ExEmployeesSearch {
  async SearchExemployees() {
    const exEmployeesFinder = await _Employee2.default.findAll({
      where: {
        is_active: 0,
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return exEmployeesFinder;
  }
}

exports. default = new ExEmployeesSearch();
