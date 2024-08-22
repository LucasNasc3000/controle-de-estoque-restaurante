import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputsList {
  async List() {
    const inputs = await Input.findAll({
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputs;
  }

  async Store(data) {
    const newInput = await Input.create(data);
    return newInput;
  }

  async Update(id, data) {
    const input = await Input.findByPk(id);

    if (!input) return 'insumo não encontrado';

    const newInputData = await input.update(data);

    return newInputData;
  }
}

export default new InputsList();
