/* eslint-disable consistent-return */
import Log from '../../models/Log';

class LogsList {
  async Store(data) {
    try {
      await Log.create(data);
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }
}

export default new LogsList();
