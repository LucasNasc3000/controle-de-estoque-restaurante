import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputFloatsSearch {
  async SearchByTotalWeight(totalweight) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          totalweight,
        },
        attributes: inputAttributes,
      });

      if (inputFinder.length <= 0) return null;

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByWeightPerUnit(weightperunit) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          weightperunit,
        },
        attributes: inputAttributes,
      });

      if (inputFinder.length <= 0) return null;

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new InputFloatsSearch();
