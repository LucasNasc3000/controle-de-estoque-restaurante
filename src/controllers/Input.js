import Input from "../models/Input";

class InputController {
  async store(req, res) {
    try {
      const newInput = await Input.create(req.body);

      const { id, type, name, quantity, totalweight, weightperunit,
      supplier, expirationdate, entrydate } = newInput;

      return res.status(201).send( id, type, name, quantity, totalweight, weightperunit,
      supplier, expirationdate, entrydate );
    } catch(e) {
      if (res.status !== 200) {
        res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }
  }

  async index(req, res) {
    try {
      const inputs = await Input.findAll({
        attributes: ['id', 'type', 'name', 'quantity', 'totalweight', 'weightperunit',
        'supplier', 'expirationdate', 'entrydate'],
        order: [['id', 'DESC']],
      });
      return res.json(inputs);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const input = await Input.findByPk(req.params.id);

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

  async delete(req, res) {
    try {
      const { id } = req.params;

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

export default new InputController();
