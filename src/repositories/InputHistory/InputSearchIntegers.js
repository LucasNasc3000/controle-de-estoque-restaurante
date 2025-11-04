import InputHistory from '../../models/InputHistory';
import inputAttributes from './Attributes';

class InputIntegerSearch {
  async SearchByID(id) {
    const inputFinder = await InputHistory.findOne({
      where: {
        id,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByQuantity(quantity) {
    const inputFinder = await InputHistory.findAll({
      where: {
        quantity,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByMinimunQuantity(minimunQuantity) {
    const inputFinder = await InputHistory.findAll({
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
