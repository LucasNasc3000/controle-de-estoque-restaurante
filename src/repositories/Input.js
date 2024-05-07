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

  async Store(
    typeParam,
    nameParam,
    quantityParam,
    totalweightParam,
    weightperunitParam,
    supplierParam,
    expirationdateParam,
    entrydateParam) {
    try {
      const newInput = await Input.create(
        typeParam,
        nameParam,
        quantityParam,
        totalweightParam,
        weightperunitParam,
        supplierParam,
        expirationdateParam,
        entrydateParam
      );
      // const alldata = [];

      const { id, type, name, quantity, totalweight, weightperunit,
      supplier, expirationdate, entrydate } = newInput;

      // alldata.push(
      //   id,
      //   type,
      //   name,
      //   quantity,
      //   totalweight,
      //   weightperunit,
      //   supplier,
      //   expirationdate,
      //   entrydate
      // );

      return newInput;
    } catch(e) {
      return e;
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
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async Delete(id) {
    try {

      const input = await Input.findByPk(id);

      if (!input) {
        return null;
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
