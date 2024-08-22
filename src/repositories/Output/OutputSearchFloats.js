import { Op } from 'sequelize';
import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputFloatsSearch {
  async SearchByWeight(weight) {
    const outputFinder = await Output.findAll({
      where: {
        weight: { [Op.startsWith]: weight },
      },
      attributes: outputAttributes,
    });

    return outputFinder;
  }
}

export default new OutputFloatsSearch();
