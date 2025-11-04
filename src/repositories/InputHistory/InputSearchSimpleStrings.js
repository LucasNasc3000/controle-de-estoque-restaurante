import { Op } from 'sequelize';
import InputHistory from '../../models/InputHistory';
import inputAttributes from './Attributes';

class InputSimpleStringSearch {
  async SearchByCategory(category) {
    const inputFinder = await InputHistory.findAll({
      where: {
        category: { [Op.startsWith]: category },
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByNameInternal(name) {
    const inputFinder = await InputHistory.findOne({
      where: {
        name,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByNameForUsers(name) {
    const inputFinder = await InputHistory.findOne({
      where: {
        name,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchBySupplier(supplier) {
    const inputFinder = await InputHistory.findAll({
      where: {
        supplier: { [Op.startsWith]: supplier },
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }

  async SearchByEmployeeId(employeeId) {
    const inputFinderByEmployeeId = await InputHistory.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinderByEmployeeId;
  }

  async SearchByReason(reason) {
    const inputFinder = await InputHistory.findAll({
      where: {
        reason: { [Op.startsWith]: reason },
      },
      attributes: inputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }
}

export default new InputSimpleStringSearch();
