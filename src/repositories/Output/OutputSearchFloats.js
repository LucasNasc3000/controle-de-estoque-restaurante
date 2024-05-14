import Output from "../../models/Output";

class OutputFloatsSearch {
  async SearchByWeight(weight) {
    try {
      const outputWeighFinder = await Output.findAll({
        where: {
          weight: weight,
        },
        attributes: [
          'id',
          'date',
          'hour',
          'name',
          'type',
          'weight',
          'weightperunit',
          'unities',
          'created_at',
          'updated_at'
        ],
      });

      if (!outputWeighFinder) {
        return null;
      }

      return outputWeighFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByWeightPerUnit(weightperunit) {
    try {
      const outputWeightPerUnitFinder = await Output.findAll({
        where: {
          weightperunit: weightperunit,
        },
        attributes: [
          'id',
          'date',
          'hour',
          'name',
          'type',
          'weight',
          'weightperunit',
          'unities',
          'created_at',
          'updated_at'
        ],
      });

      if (!outputWeightPerUnitFinder) {
        return null;
      }

      return outputWeightPerUnitFinder;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new OutputFloatsSearch();
