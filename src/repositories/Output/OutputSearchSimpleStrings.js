import { Op } from 'sequelize';
import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputSimpleStringSearch {
  async SearchByType(type) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          type: { [Op.startsWith]: type },
        },
        attributes: outputAttributes,
      });

      return outputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          name: { [Op.startsWith]: name },
        },
        attributes: outputAttributes,
      });

      return outputFinder;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new OutputSimpleStringSearch();
