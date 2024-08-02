import { Op } from 'sequelize';
import Input from '../../models/Input';

class InputFloatsSearch {
  async SearchByTotalWeight(totalweight) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          totalweight: { [Op.like]: totalweight },
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

  async SearchByWeightPerUnit(weightperunit) {
    try {
      const inputFinder = await Input.findAll({
        where: {
          weightperunit: { [Op.like]: weightperunit },
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

export default new InputFloatsSearch();
