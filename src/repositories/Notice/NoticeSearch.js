import Notice from '../../models/Notice';
import noticeAttributes from './Attributes';

class NoticeSearch {
  async SearchById(id) {
    const timerIdSearch = await Notice.findOne({
      where: {
        id,
      },
      attributes: noticeAttributes,
    });

    return timerIdSearch;
  }

  async SearchBySaleId(saleId) {
    const saleIdSearch = await Notice.findOne({
      where: {
        sale_id: saleId,
      },
      attributes: noticeAttributes,
    });

    return saleIdSearch;
  }

  async SearchByEmployeeId(employeeId) {
    const employeeIdSearch = await Notice.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: noticeAttributes,
    });

    return employeeIdSearch;
  }
}

export default new NoticeSearch();
