import { Op } from "sequelize";
import Output from "../../models/Output";

class OutputSimpleStringSearch {
  async SearchByType(type) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          type: { [Op.like]: `%${type}%` },
        },
        attributes: [
          'id',
          'date',
          'hour',
          'name',
          'type',
          'weight',
          'unities',
          'created_at',
          'updated_at',
        ],
      });

      if (outputFinder.length <= 0) return null;

      return outputFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          name: { [Op.like]: `%${name}%` },
        },
        attributes: [
          'id',
          'date',
          'hour',
          'name',
          'type',
          'weight',
          'unities',
          'created_at',
          'updated_at',
        ],
      });

      if (outputFinder.length <= 0) return null;

      return outputFinder;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new OutputSimpleStringSearch();
