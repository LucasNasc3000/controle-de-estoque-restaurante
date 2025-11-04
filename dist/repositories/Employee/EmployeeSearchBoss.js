"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Employee = require('../../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class EmployeesSearchBoss {
  async SearchByBoss(boss) {
    if (boss === null) return 'Não autorizado';

    const employeeFinder = await _Employee2.default.findAll({
      where: {
        boss,
<<<<<<< HEAD
        is_active: 1,
=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
      },
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return employeeFinder;
  }

  async SearchByBossForListItems(boss) {
    if (boss === null) return 'Não autorizado';

    const employeeFinder = await _Employee2.default.findAll({
      where: {
        boss,
<<<<<<< HEAD
      },
      attributes: ['id'],
=======
        is_active: 1,
      },
      attributes: _Attributes2.default,
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
      order: [['id', 'DESC']],
    });

    return employeeFinder;
  }
}

exports. default = new EmployeesSearchBoss();
