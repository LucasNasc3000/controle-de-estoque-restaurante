import Notification from '../Notifications/RegistersNotifications';
import { LogError } from '../errors/logErrors';
import LogList from '../repositories/Employee/Log';

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

    const logStore = await LogList.Store(logData);

    if (!logStore) {
      await Notification.DataFilter('', '', logStore);
      throw new LogError('Erro ao realizar login');
    }
  }
}

export default new LogRegister();
