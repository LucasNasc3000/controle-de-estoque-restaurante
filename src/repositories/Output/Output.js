import Output from '../../models/Output';

class OutputsList {
  async Store(data) {
    const newOutput = await Output.create(data);
    return newOutput;
  }

  async Update(id, data) {
    const output = await Output.findByPk(id);

    if (!output) return 'saída não encontrada';

    const newOutputData = await output.update(data);

    return newOutputData;
  }
}

export default new OutputsList();
