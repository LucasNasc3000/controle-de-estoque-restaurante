import { Op } from "sequelize";
import Output from "../../models/Output";

class OutputFloatsSearch {
  async SearchByWeight(weight) {
    try {
      const outputWeighFinder = await Output.findAll({
        where: {
          weight: { [Op.like]: weight }
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
          'updated_at'
        ],
      });

      if (outputWeighFinder.length < 0) {
        return null;
      }

      return outputWeighFinder;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new OutputFloatsSearch();
