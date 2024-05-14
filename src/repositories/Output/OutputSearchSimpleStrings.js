import Output from "../../models/Output";

class OutputSimpleStringSearch {
  async SearchByType(type) {
    try {
      const outputTypeFinder = await Output.findAll({
        where: {
          type: type,
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
          'updated_at',
        ],
      });

      if (!outputTypeFinder) {
        return null;
      }

      return outputTypeFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const outputNameFinder = await Output.findAll({
        where: {
          name: name,
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
          'updated_at',
        ],
      });

      if (!outputNameFinder) {
        return null;
      }

      return outputNameFinder;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new OutputSimpleStringSearch();
