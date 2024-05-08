import Input from "../models/Input";

class InputSearchList {
  async SearchByTotalWeight(totalweight) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          totalweight: totalweight,
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

  async SearchByWeightPerUnit(weightperunit) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          weightperunit: weightperunit,
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
