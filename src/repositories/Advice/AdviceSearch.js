import Advice from '../../models/Advice';
import adviceAttributes from './Attributes';

class AdviceSearch {
  async SearchById(id) {
    const timerIdSearch = await Advice.findOne({
      where: {
        id,
      },
      attributes: adviceAttributes,
    });

    return timerIdSearch;
  }

  async SearchByEmployeeId(employeeId) {
    const employeeIdSearch = await Advice.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: adviceAttributes,
    });

    return employeeIdSearch;
  }

  async FoundMaxTimerId() {
    const maxTimerId = await Advice.max('timer_id');
    return maxTimerId;
  }
}

export default new AdviceSearch();
