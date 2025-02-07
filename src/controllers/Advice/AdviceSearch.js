/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import AdviceSearch from '../../repositories/Advice/AdviceSearch';
import SalesSearchSalesData from '../../repositories/Sales/SalesSearchSalesData';

class AdviceSearchController {
  async SearchBySaleId(req, res, next) {
    try {
      const { saleid } = req.params;

      const adviceSaleIdFinder = await SalesSearchSalesData.SearchById(saleid);

      if (!adviceSaleIdFinder) throw new NotFound('Lembrete não encontrado');

      return res.status(200).json(adviceSaleIdFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmployeeId(req, res, next) {
    try {
      const { employeeid } = req.params;

      const adviceEmployeeIdFinder = await AdviceSearch.SearchByEmployeeId(employeeid);

      if (!adviceEmployeeIdFinder) throw new InternalServerError('Erro interno');

      return res.status(200).json(adviceEmployeeIdFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new AdviceSearchController();
