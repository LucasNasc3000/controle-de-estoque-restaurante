import { Op } from 'sequelize';
import Output from '../../models/Output';

class OutputSearchDateHourRepository {
  async SearchByDate(date) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          date: { [Op.like]: `%${date}%` },
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

  async SearchByHour(hour) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          hour: { [Op.like]: `%${hour}%` },
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

export default new OutputSearchDateHourRepository();
