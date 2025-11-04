import { Op } from 'sequelize';
import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputDatesSearch {
  async SearchByExpirationDate(expirationdate) {
    const inputFinder = await Input.findAll({
      where: {
        expirationdate: { [Op.startsWith]: expirationdate },
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }
}

export default new InputDatesSearch();
