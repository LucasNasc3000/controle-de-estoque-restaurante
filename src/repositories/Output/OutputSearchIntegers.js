import { Op } from 'sequelize';
import Output from '../../models/Output';

class OutputIntegersSearch {
  async SearchByID(id) {
    try {
      const outputFinder = await Output.findAll({
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
          'updated_at',
        ],
      });

      if (outputFinder.length <= 0) return null;

      return outputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByUnities(unities) {
    try {
      const outputFinder = await Output.findAll({
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
          'updated_at',
        ],
      });

      if (outputFinder.length <= 0) return null;

      return outputFinder;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new OutputIntegersSearch();
