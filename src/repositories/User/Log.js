import Log from '../../models/Log';

class LogsList {
  async Store(data) {
    try {
      const newLog = await Log.create(data);

      if(!newLog) return null;

      return newLog;
    } catch(e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }
}

export default new LogsList();
