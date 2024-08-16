import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputIntegerSearch {
  async SearchByID(id) {
    try {
      const inputFinder = await Input.findOne({
        where: {
          id,
        },
        attributes: inputAttributes,
      });

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByQuantity(quantity) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          quantity,
        },
        attributes: inputAttributes,
      });

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByMinimunQuantity(minimunQuantity) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          minimun_quantity: minimunQuantity,
        },
        attributes: inputAttributes,
      });

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new InputIntegerSearch();
