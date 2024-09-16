"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Log = require('../repositories/Employee/Log'); var _Log2 = _interopRequireDefault(_Log);
var _Notification = require('../Notifications/Notification'); var _Notification2 = _interopRequireDefault(_Notification);
var _logErrors = require('../errors/logErrors');

class LogRegister {
  setLogData() {
    const data = new Date();
    const dateTime = [];

    const logTime = data.toLocaleTimeString('pt-BR', {
      hour12: false,
    });

    const logDate = data.toLocaleDateString('pt-BR', {
      dateStyle: 'short',
    });

    dateTime.push(logDate, logTime);
    return dateTime;
  }

  async createLog(id, email) {
    const logDateTime = this.setLogData();
    const logData = {
      email,
      date: logDateTime[0],
      time: logDateTime[1],
      employee_id: id,
    };

    const logStore = await _Log2.default.Store(logData);

    if (!logStore) {
      await _Notification2.default.DataFilter('', '', logStore);
      throw new (0, _logErrors.LogError)('Erro ao realizar login');
    }
  }
}

exports. default = new LogRegister();