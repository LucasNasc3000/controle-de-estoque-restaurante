import { Op } from 'sequelize';
import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputSimpleStringSearch {
  async SearchByType(type) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          type: { [Op.startsWith]: type },
        },
        attributes: inputAttributes,
      });

      if (inputFinder.length < 1) return null;

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          name: { [Op.startsWith]: name },
        },
        attributes: inputAttributes,
      });

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchBySupplier(supplier) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          supplier: { [Op.startsWith]: supplier },
        },
        attributes: inputAttributes,
      });

      if (inputFinder.length < 1) return null;

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new InputSimpleStringSearch();
