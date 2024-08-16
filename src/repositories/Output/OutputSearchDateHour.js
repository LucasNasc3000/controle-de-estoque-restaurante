import { Op } from 'sequelize';
import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputSearchDateHourRepository {
  async SearchByDate(date) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          date: { [Op.startsWith]: date },
        },
        attributes: outputAttributes,
      });

      return outputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByHour(hour) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          hour: { [Op.startsWith]: hour },
        },
        attributes: outputAttributes,
      });

      return outputFinder;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new OutputSearchDateHourRepository();
