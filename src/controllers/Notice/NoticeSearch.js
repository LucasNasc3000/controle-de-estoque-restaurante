/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import NoticeSearch from '../../repositories/Notice/NoticeSearch';
import SalesSearchSalesData from '../../repositories/Sales/SalesSearchSalesData';

class NoticeSearchController {
  async SearchBySaleId(req, res, next) {
    try {
      const { saleid } = req.params;

      const noticeSaleIdFinder = await SalesSearchSalesData.SearchById(saleid);

      if (!noticeSaleIdFinder) throw new NotFound('Lembrete não encontrado');

      return res.status(200).json(noticeSaleIdFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmployeeId(req, res, next) {
    try {
      const { employeeId } = req.params;

      const noticeEmployeeIdFinder = await NoticeSearch.SearchByEmployeeId(employeeId);

      if (!noticeEmployeeIdFinder) throw new InternalServerError('Erro interno');
      if (noticeEmployeeIdFinder.length < 1) throw new NotFound('Lembretes não encontrados');

      return res.status(200).json(noticeEmployeeIdFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new NoticeSearchController();
