import Input from "../models/Input";

class InputSearchList {
  async SearchByType(type) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          type: type,
        },
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
          'created_at',
          'updated_at',
        ],
      });

      if (!inputFinder) {
        return null;
      }

      return inputFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          name: name,
        },
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
          'created_at',
          'updated_at',
        ],
      });

      if (!inputFinder) {
        return null;
      }

      return inputFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchBySupplier(supplier) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          supplier: supplier,
        },
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
          'created_at',
          'updated_at',
        ],
      });

      if (!inputFinder) {
        return null;
      }

      return inputFinder;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new InputSearchList();
