import { Op } from 'sequelize';
import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputSearchDateHourRepository {
  async SearchByDate(date) {
    const outputFinder = await Output.findAll({
      where: {
        date: { [Op.startsWith]: date },
      },
      attributes: outputAttributes,
    });

    return outputFinder;
  }

  async SearchByHour(hour) {
    const outputFinder = await Output.findAll({
      where: {
        hour: { [Op.startsWith]: hour },
      },
      attributes: outputAttributes,
    });

    return outputFinder;
  }
}

export default new OutputSearchDateHourRepository();
