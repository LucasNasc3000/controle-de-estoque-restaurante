import LogList from '../repositories/Employee/Log';

class LogController {
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
    await LogList.Store(logData);
  }
}

export default new LogController();
