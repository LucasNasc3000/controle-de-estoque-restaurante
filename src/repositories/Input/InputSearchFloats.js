import { Op } from 'sequelize';
import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputFloatsSearch {
  async SearchByTotalWeight(totalweight) {
    const inputFinder = await Input.findAll({
      where: {
        totalweight,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByWeightPerUnit(weightperunit) {
    const inputFinder = await Input.findAll({
      where: {
        weightperunit,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByPrice(price) {
    const inputsFinderByPrice = await Input.findAll({
      where: {
        price: { [Op.startsWith]: price },
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputsFinderByPrice;
  }
}

export default new InputFloatsSearch();
