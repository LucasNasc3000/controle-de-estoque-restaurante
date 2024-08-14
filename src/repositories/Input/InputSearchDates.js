import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputDatesSearch {
  async SearchByEntryDate(entrydate) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          entrydate,
        },
        attributes: inputAttributes,
      });

      if (inputFinder.length <= 0) return null;

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByExpirationDate(expirationdate) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          expirationdate,
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

export default new InputDatesSearch();
