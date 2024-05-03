import Input from "../models/Input";

class InputsList {
  async List() {
    try {
      const inputs = await Input.findAll({
        attributes: ['id', 'type', 'name', 'quantity', 'totalweight', 'weightperunit',
        'supplier', 'expirationdate', 'entrydate'],
        order: [['id', 'DESC']],
      });
      return inputs;
    } catch (e) {
      return null;
    }
  }

  async Store(data) {
    try {
      const newInput = await Input.create(data);
      const alldata = [];

      const { id, type, name, quantity, totalweight, weightperunit,
      supplier, expirationdate, entrydate } = newInput;

      alldata.push(
        id,
        type,
        name,
        quantity,
        totalweight,
        weightperunit,
        supplier,
        expirationdate,
        entrydate
      );

      return alldata;
    } catch(e) {
      const error = 'Ocorreu um erro';
      return error;
    }
  }

  async Update(id) {
    try {
      const input = await Input.findByPk(id);

      if (!input) {
        return res.status(400).json({
          errors: ['Insumo não registrado'],
        });
      }

      const newInputData = await input.update(req.body);
      return res.json(newInputData);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async Delete(id) {
    try {

      if (!id) {
        res.status(400).json({
          errors: ['ID não encontrado'],
        });
      }

      const input = await Input.findByPk(id);

      if (!input) {
        res.status(400).json({
          errors: ['Insumo não registrado'],
        });
      }

      await input.destroy();
      return res.json(`insumo ${input.id} deletado`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new InputsList();
