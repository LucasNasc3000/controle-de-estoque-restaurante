import InputHistory from '../../models/InputHistory';

class InputsList {
  async Store(data) {
    const newInput = await InputHistory.create(data);
    return newInput;
  }
}

export default new InputsList();
