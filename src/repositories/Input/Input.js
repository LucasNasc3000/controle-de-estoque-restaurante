import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputsList {
  async List() {
    try {
      const inputs = await Input.findAll({
        attributes: inputAttributes,
        order: [['id', 'DESC']],
      });

      if (inputs.length <= 0) return null;

      return inputs;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newInput = await Input.create(data);

      if (!newInput) return null;

      return newInput;
    } catch (e) {
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const input = await Input.findByPk(id);

      if (input.length <= 0) return null;

      const newInputData = await input.update(data);
      return newInputData;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new InputsList();
