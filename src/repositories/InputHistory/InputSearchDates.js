import { Op } from 'sequelize';
import InputHistory from '../../models/InputHistory';
import inputAttributes from './Attributes';

class InputDatesSearch {
  async SearchByExpirationDate(expirationdate) {
    const inputFinder = await InputHistory.findAll({
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
