import Output from '../../models/Output';

class OutputsList {
  async Store(data) {
    const newOutput = await Output.create(data);
    return newOutput;
  }
}

export default new OutputsList();
