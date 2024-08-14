import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputIntegersSearch {
  async SearchByID(id) {
    try {
      const outputFinder = await Output.findOne({
        where: {
          id,
        },
        attributes: outputAttributes,
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
          unities,
        },
        attributes: outputAttributes,
      });

      if (outputFinder.length <= 0) return null;

      return outputFinder;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new OutputIntegersSearch();
