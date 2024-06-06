import { Op } from "sequelize";
import Output from "../../models/Output";

class OutputIntegersSearch {
  async SearchByID(id) {
    try {
      const outputIdFinder = await Output.findAll({
        where: {
          id: { [Op.like]: id },
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

      if (!outputIdFinder) {
        return null;
      }

      return outputIdFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByUnities(unities) {
    try {
      const outputUnitiesFinder = await Output.findAll({
        where: {
          unities: { [Op.like]: unities },
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

      if (!outputUnitiesFinder) {
        return null;
      }

      return outputUnitiesFinder;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new OutputIntegersSearch();
