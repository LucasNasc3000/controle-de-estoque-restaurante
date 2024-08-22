import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputDatesSearch {
  async SearchByEntryDate(entrydate) {
    const inputFinder = await Input.findAll({
      where: {
        entrydate,
      },
      attributes: inputAttributes,
    });

    return inputFinder;
  }

  async SearchByExpirationDate(expirationdate) {
    const inputFinder = await Input.findAll({
      where: {
        expirationdate,
      },
      attributes: inputAttributes,
    });

    return inputFinder;
  }
}

export default new InputDatesSearch();
