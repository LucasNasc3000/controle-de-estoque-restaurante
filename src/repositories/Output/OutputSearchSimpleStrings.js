import { Op } from 'sequelize';
import Output from '../../models/Output';
import outputAttributes from './Attributes';

class OutputSimpleStringSearch {
  async SearchByType(type) {
    const outputFinder = await Output.findAll({
      where: {
        type: { [Op.startsWith]: type },
      },
      attributes: outputAttributes,
    });

    return outputFinder;
  }

  async SearchByName(name) {
    const outputFinder = await Output.findAll({
      where: {
        name: { [Op.startsWith]: name },
      },
      attributes: outputAttributes,
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
}

export default new OutputSimpleStringSearch();
