import { Op } from 'sequelize';
import Input from '../../models/Input';
import inputAttributes from './Attributes';

class InputSimpleStringSearch {
  async SearchByType(type) {
    const inputFinder = await Input.findAll({
      where: {
        type: { [Op.startsWith]: type },
      },
      attributes: inputAttributes,
    });

    return inputFinder;
  }

  async SearchByNameForUsers(name) {
    const inputFinder = await Input.findAll({
      where: {
        name: { [Op.startsWith]: name },
      },
      attributes: inputAttributes,
    });

    return inputFinder;
  }

  async SearchByNameInternal(name) {
    const inputFinder = await Input.findOne({
      where: {
        name,
      },
      attributes: inputAttributes,
    });

    return inputFinder;
  }

  async SearchBySupplier(supplier) {
    const inputFinder = await Input.findAll({
      where: {
        supplier: { [Op.startsWith]: supplier },
      },
      attributes: inputAttributes,
    });

    return inputFinder;
  }

  async SearchByEmployeeId(employeeId) {
    const inputFinderByEmployeeId = await Input.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: inputAttributes,
    });

    return inputFinderByEmployeeId;
  }
}

export default new InputSimpleStringSearch();
