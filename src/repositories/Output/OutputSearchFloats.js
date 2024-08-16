import { Op } from 'sequelize';
import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputFloatsSearch {
  async SearchByWeight(weight) {
    try {
      const outputFinder = await Output.findAll({
        where: {
          weight: { [Op.startsWith]: weight },
        },
        attributes: outputAttributes,
      });

      return outputFinder;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new OutputFloatsSearch();
