import Output from "../../models/Output";

class OutputsList {
  async List() {
    try {
      const outputs = await Output.findAll({
        attributes: [
          'id',
          'date',
          'hour',
          'name',
          'type',
          'weight',
          'weightperunit',
          'unities',
          'created_at',
          'updated_at'
        ],
        order: [['id', 'DESC']],
      });

      if(outputs === '') return null;

      return outputs;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newOutput = await Output.create(data);

      if(!newOutput) return null;

      return newOutput;
    } catch(e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const output = await Output.findByPk(id);

      if (!output) {
        return null;
      }

      const newOutputData = await output.update(data);
      return newOutputData;
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  async Delete(id) {
    try {

      const output = await Output.findByPk(id);

      if (!output) {
        return null;
      }

      await output.destroy();
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }
}

export default new OutputsList();
