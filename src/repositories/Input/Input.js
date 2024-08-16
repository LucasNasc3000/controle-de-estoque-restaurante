import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputsList {
  async List() {
    try {
      const inputs = await Input.findAll({
        attributes: inputAttributes,
        order: [['id', 'DESC']],
      });

      return inputs;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newInput = await Input.create(data);
      return newInput;
    } catch (e) {
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const input = await Input.findByPk(id);

      if (!input) return 'insumo não encontrado';

      const newInputData = await input.update(data);

      return newInputData;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new InputsList();
