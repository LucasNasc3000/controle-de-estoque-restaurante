import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputIntegerSearch {
  async SearchByID(id) {
    const inputFinder = await Input.findOne({
      where: {
        id,
      },
      attributes: inputAttributes,
    });

    return inputFinder;
  }

  async SearchByQuantity(quantity) {
    const inputFinder = await Input.findAll({
      where: {
        quantity,
      },
      attributes: inputAttributes,
    });

    return inputFinder;
  }

  async SearchByMinimunQuantity(minimunQuantity) {
    const inputFinder = await Input.findAll({
      where: {
        minimun_quantity: minimunQuantity,
      },
      attributes: inputAttributes,
    });

    return inputFinder;
  }
}

export default new InputIntegerSearch();
