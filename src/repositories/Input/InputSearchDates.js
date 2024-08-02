import { Op } from 'sequelize';
import Input from '../../models/Input';

class InputDatesSearch {
  async SearchByEntryDate(entrydate) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          entrydate: { [Op.like]: `%${entrydate}%` },
        },
        attributes: [
          'id',
          'type',
          'name',
          'quantity',
          'totalweight',
          'weightperunit',
          'supplier',
          'expirationdate',
          'entrydate',
          'employee_id',
          'minimun_quantity',
          'created_at',
          'updated_at',
        ],
      });

      if (inputFinder.length <= 0) return null;

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByExpirationDate(expirationdate) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          expirationdate: { [Op.like]: `%${expirationdate}%` },
        },
        attributes: [
          'id',
          'type',
          'name',
          'quantity',
          'totalweight',
          'weightperunit',
          'supplier',
          'expirationdate',
          'entrydate',
          'employee_id',
          'minimun_quantity',
          'created_at',
          'updated_at',
        ],
      });

      if (inputFinder.length <= 0) return null;

      return inputFinder;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new InputDatesSearch();
