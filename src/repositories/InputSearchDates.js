import Input from "../models/Input";

class InputSearchList {
  async SearchByEntryDate(entrydate) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          entrydate: entrydate,
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

  async SearchByExpirationDate(expirationdate) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          expirationdate: expirationdate,
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
