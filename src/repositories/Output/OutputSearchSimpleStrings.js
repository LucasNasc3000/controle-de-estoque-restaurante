import { Op } from 'sequelize';
import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputSimpleStringSearch {
  async SearchByCategory(category) {
    const outputFinder = await Output.findAll({
      where: {
        category: { [Op.startsWith]: category },
      },
      attributes: outputAttributes,
      order: [['id', 'DESC']],
    });

    return outputFinder;
  }

  async SearchByName(name) {
    const outputFinder = await Output.findAll({
      where: {
        name: { [Op.startsWith]: name },
      },
      attributes: outputAttributes,
      order: [['id', 'DESC']],
    });

    return outputFinder;
  }

  async SearchByEmployeeId(employeeId) {
    const outputFinderByEmployeeId = await Output.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: outputAttributes,
    });

    return outputFinderByEmployeeId;
  }

  async SearchByReason(reason) {
    const inputFinder = await Output.findAll({
      where: {
        reason: { [Op.startsWith]: reason },
      },
      attributes: outputAttributes,
      order: [['id', 'DESC']],
    });

    return inputFinder;
  }
}

export default new OutputSimpleStringSearch();
