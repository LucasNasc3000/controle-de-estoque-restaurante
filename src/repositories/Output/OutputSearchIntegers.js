import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputIntegersSearch {
  async SearchByID(id) {
    const outputFinder = await Output.findOne({
      where: {
        id,
      },
      attributes: outputAttributes,
      order: [['id', 'DESC']],
    });

    return outputFinder;
  }

  async SearchByUnities(unities) {
    const outputFinder = await Output.findAll({
      where: {
        unities,
      },
      attributes: outputAttributes,
      order: [['id', 'DESC']],
    });

    return outputFinder;
  }
}

export default new OutputIntegersSearch();
