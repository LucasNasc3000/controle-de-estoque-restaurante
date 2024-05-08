import Input from "../models/Input";

class InputIntegerSearchList {
  async SearchByID(id) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          id: id,
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

  async SearchByQuantity(quantityNumber) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          quantity: quantityNumber,
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

export default new InputIntegerSearchList();
