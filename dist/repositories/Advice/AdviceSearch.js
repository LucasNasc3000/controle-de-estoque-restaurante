"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Advice = require('../../models/Advice'); var _Advice2 = _interopRequireDefault(_Advice);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class AdviceSearch {
  async SearchById(id) {
    const timerIdSearch = await _Advice2.default.findOne({
      where: {
        id,
      },
      attributes: _Attributes2.default,
    });

    return timerIdSearch;
  }

  async SearchByEmployeeId(employeeId) {
    const employeeIdSearch = await _Advice2.default.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: _Attributes2.default,
    });

    return employeeIdSearch;
  }

  async FoundMaxTimerId() {
    const maxTimerId = await _Advice2.default.max('timer_id');
    return maxTimerId;
  }
}

exports. default = new AdviceSearch();
