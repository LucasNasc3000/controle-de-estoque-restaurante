import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputsList {
  async List() {
    try {
      const outputs = await Output.findAll({
        attributes: outputAttributes,
        order: [['id', 'DESC']],
      });

      return outputs;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newOutput = await Output.create(data);
      return newOutput;
    } catch (e) {
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const output = await Output.findByPk(id);

      if (!output) return 'saída não encontrada';

      const newOutputData = await output.update(data);

      return newOutputData;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new OutputsList();
