import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputsList {
  async Store(data) {
    const newOutput = await Output.create(data);
    return newOutput;
  }

  async List() {
    const outputs = await Output.findAll({
      attributes: outputAttributes,
      order: [['id', 'DESC']],
    });

    return outputs;
  }

  async Update(id, data) {
    const output = await Output.findByPk(id);

    if (!output) return 'saída não encontrada';

    const newOutputData = await output.update(data);

    return newOutputData;
  }
}

export default new OutputsList();
