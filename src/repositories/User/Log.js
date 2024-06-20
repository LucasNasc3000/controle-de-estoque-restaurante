import Log from '../../models/Log';

class LogsList {
  async List() {
    try {
      const logs = await Log.findAll({
        attributes: [
          'id',
          'email',
          'name',
          'date',
          'time',
          'user_id',
          'created_at',
          'updated_at'
        ],
        order: [['id', 'DESC']],
      });

      if(logs.length <= 0) return null;

      return logs;
    } catch (e) {
      return console.log(e);
    }
  }

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
