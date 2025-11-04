import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputIntegerSearch {
  async SearchByID(id) {
    const inputFinder = await Input.findOne({
      where: {
        id,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByQuantity(quantity) {
    const inputFinder = await Input.findAll({
      where: {
        quantity,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByMinimunQuantity(minimunQuantity) {
    const inputFinder = await Input.findAll({
      where: {
        minimun_quantity: minimunQuantity,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }
}

export default new InputIntegerSearch();
