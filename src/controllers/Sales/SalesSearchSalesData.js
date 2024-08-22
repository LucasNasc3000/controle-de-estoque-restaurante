/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import SalesSearchSalesData from '../../repositories/Sales/SalesSearchSalesData';

class SalesSearchSalesDataController {
  async SearchById(req, res, next) {
    try {
      const { id } = req.params;

      const saleIdFinder = await
      SalesSearchSalesData.SearchById(id);

      if (!saleIdFinder) throw new NotFound('Venda não encontrada');

      return res.status(200).json(saleIdFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByEmployeeId(req, res, next) {
    try {
      const { employeeid } = req.params;

      const salesEmployeeIdFinder = await SalesSearchSalesData.SearchByemployeeId(employeeid);

      if (!salesEmployeeIdFinder) throw new NotFound('Venda não encontrada');

      return res.status(200).json(salesEmployeeIdFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByProducts(req, res, next) {
    try {
      const { products } = req.params;

      const employeeProductsFinder = await
      SalesSearchSalesData.SearchByProducts(products);

      if (!employeeProductsFinder) throw new InternalServerError('Erro interno');
      if (employeeProductsFinder.length < 1) throw new NotFound('Venda não encontrada');

      return res.status(200).json(employeeProductsFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByDate(req, res, next) {
    try {
      const { date } = req.params;

      const employeeDateFinder = await
      SalesSearchSalesData.SearchDate(date);

      if (!employeeDateFinder) throw new InternalServerError('Erro interno');
      if (employeeDateFinder.length < 1) throw new NotFound('Venda não encontrada');

      return res.status(200).json(employeeDateFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByHour(req, res, next) {
    try {
      const { hour } = req.params;

      const employeeHourFinder = await
      SalesSearchSalesData.SearchByHour(hour);

      if (!employeeHourFinder) throw new InternalServerError('Erro interno');
      if (employeeHourFinder.length < 1) throw new NotFound('Venda não encontrada');

      return res.status(200).json(employeeHourFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new SalesSearchSalesDataController();
