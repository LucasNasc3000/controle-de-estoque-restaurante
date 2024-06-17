import { Op } from "sequelize";
import Input from "../../models/Input";

class InputSimpleStringSearch {
  async SearchByType(type) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          type: { [Op.like]: `%${type}%` },
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

      if(inputFinder.length <= 0) return null;

      return inputFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          name: { [Op.like]: `%${name}%` },
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

      if(inputFinder.length <= 0) return null;

      return inputFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchBySupplier(supplier) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          supplier: { [Op.like]: `%${supplier}%` },
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

      if(inputFinder.length <= 0) return null;

      return inputFinder;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new InputSimpleStringSearch();
