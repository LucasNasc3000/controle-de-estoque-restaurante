import { Op } from 'sequelize';
import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputSimpleStringSearch {
  async SearchByCategory(category) {
    const inputFinder = await Input.findAll({
      where: {
        category: { [Op.startsWith]: category },
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByNameForUsers(name) {
    const inputFinder = await Input.findAll({
      where: {
        name: { [Op.startsWith]: name },
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByNameInternal(name) {
    const inputFinder = await Input.findOne({
      where: {
        name,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchBySupplier(supplier) {
    const inputFinder = await Input.findAll({
      where: {
        supplier: { [Op.startsWith]: supplier },
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByEmployeeId(employeeId) {
    const inputFinderByEmployeeId = await Input.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinderByEmployeeId;
  }
}

export default new InputSimpleStringSearch();
