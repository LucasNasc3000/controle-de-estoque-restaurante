import { Op } from "sequelize";
import Input from "../../models/Input";

class InputIntegerSearch {
  async SearchByID(id) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          id: { [Op.like]: id },
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

  async SearchByQuantity(quantityNumber) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          quantity: { [Op.like]: quantityNumber },
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

export default new InputIntegerSearch();
