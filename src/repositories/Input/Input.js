import Input from '../../models/Input';

class InputsList {
  async List() {
    try {
      const inputs = await Input.findAll({
        attributes: [
          'id',
          'type',
          'name',
          'quantity',
          'totalweight',
          'weightperunit',
          'supplier',
          'expirationdate',
          'entrydate',
          'employee_id',
          'minimun_quantity',
          'created_at',
          'updated_at',
        ],
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
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const input = await Input.findByPk(id);

      if (!input) {
        return null;
      }

      const newInputData = await input.update(data);
      return newInputData;
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  // eslint-disable-next-line consistent-return
  async Delete(id) {
    try {
      const input = await Input.findByPk(id);

      if (!input) {
        return null;
      }

      await input.destroy();
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  // Somente para o desenvolvimento
  async Truncate() {
    try {
      await Input.truncate();
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default new InputsList();
