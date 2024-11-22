import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputDatesSearch {
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
