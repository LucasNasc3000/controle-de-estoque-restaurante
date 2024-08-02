import { Op } from 'sequelize';
import Output from '../../models/Output';

class OutputFloatsSearch {
  async SearchByWeight(weight) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          weight: { [Op.like]: weight },
        },
        attributes: [
          'id',
          'date',
          'hour',
          'name',
          'type',
          'weight',
          'unities',
          'employee_id',
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

export default new OutputFloatsSearch();
