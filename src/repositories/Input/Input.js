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
      return console.log(e);
    }
  }
}

export default new InputsList();
