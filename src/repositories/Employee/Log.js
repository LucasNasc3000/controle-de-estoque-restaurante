/* eslint-disable consistent-return */
import Log from '../../models/Log';

class LogsList {
  async Store(data) {
    const store = await Log.create(data);
    return store;
  }
}

export default new LogsList();
