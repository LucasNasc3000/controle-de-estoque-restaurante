/* eslint-disable array-callback-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import EmployeeSearchBoss from '../../repositories/Employee/EmployeeSearchBoss';
import EmployeeSearchCredentials from '../../repositories/Employee/EmployeeSearchCredentials';
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
      const { forListSales, employeeidBody } = req.body;

      const WhichSearch = async () => {
        if (employeeidBody && !employeeid) {
          const saleEmployeeIdFinder = await SalesSearchSalesData.SearchByemployeeId(employeeidBody);
          return saleEmployeeIdFinder;
        }

        if (!employeeidBody && employeeid) {
          const saleEmployeeIdFinder = await SalesSearchSalesData.SearchByemployeeId(employeeid);
          return saleEmployeeIdFinder;
        }
      };

      const saleEmployeeIdSearch = await WhichSearch();

      if (!saleEmployeeIdSearch) throw new InternalServerError('Erro interno');

      if (!forListSales && saleEmployeeIdSearch.length < 1) throw new NotFound('Vendas não encontradas');

      if (forListSales === true && saleEmployeeIdSearch.length < 1) {
        return res.status(204).send('Não há vendas cadastradas pelo funcionário');
      }

      return res.status(200).json(saleEmployeeIdSearch);
    } catch (err) {
      next(err);
    }
  }

  async SearchByProducts(req, res, next) {
    try {
      const { products } = req.params;

      const saleProductsFinder = await
      SalesSearchSalesData.SearchByProducts(products);

      if (!saleProductsFinder) throw new InternalServerError('Erro interno');
      if (saleProductsFinder.length < 1) throw new NotFound('Venda não encontrada');

      return res.status(200).json(saleProductsFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByDateDashboard(req, res, next) {
    try {
      const { email } = req.headers;
      const { saledateBody } = req.body;
      const empIds = [];
      const registers = [];

      const findEmpByEmail = await EmployeeSearchCredentials.SearchByEmail(email);

      if (findEmpByEmail.dataValues.boss === null) {
        const findEmpsByBoss = await EmployeeSearchBoss.SearchByBoss(findEmpByEmail.dataValues.id);

        if (findEmpsByBoss.length > 0) {
          findEmpsByBoss.map((emps) => {
            empIds.push(emps.id);
          });
        }
      } else {
        const findEmpsByBoss = await EmployeeSearchBoss.SearchByBoss(findEmpByEmail.dataValues.boss);
        findEmpsByBoss.map((emps) => {
          empIds.push(emps.id);
        });
      }

      for (let i = 0; i < empIds.length; i++) {
        const saleDateFinder = await SalesSearchSalesData.SearchDateForDashboard(saledateBody, empIds[i]);

        if (!saleDateFinder && saleDateFinder !== 0) throw new InternalServerError('Erro interno');

        registers.push(saleDateFinder);
      }

      const registersSum = registers.reduce((ac, cr) => ac + cr, 0);

      return res.status(200).json(registersSum);
    } catch (err) {
      next(err);
    }
  }

  async SearchByDate(req, res, next) {
    try {
      const { date } = req.params;

      const saleDateFinder = await SalesSearchSalesData.SearchDate(date);

      if (!saleDateFinder) throw new InternalServerError('Erro interno');

      if (saleDateFinder.length < 1) throw new NotFound('Venda não encontrada');

      return res.status(200).json(saleDateFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByHour(req, res, next) {
    try {
      const { hour } = req.params;

      const saleHourFinder = await
      SalesSearchSalesData.SearchByHour(hour);

      if (!saleHourFinder) throw new InternalServerError('Erro interno');
      if (saleHourFinder.length < 1) throw new NotFound('Venda não encontrada');

      return res.status(200).json(saleHourFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new SalesSearchSalesDataController();
