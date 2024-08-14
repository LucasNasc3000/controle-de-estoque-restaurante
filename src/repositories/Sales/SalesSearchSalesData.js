import { Op } from 'sequelize';
import Sale from '../../models/Sale';
import salesAttributes from './Attributes';

class SalesSearchSalesData {
  async SearchById(id) {
    try {
      const SaleFinder = await Sale.findOne({
        where: {
          id,
        },
        attributes: salesAttributes,
      });

      if (SaleFinder.length <= 0) return null;

      return SaleFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByemployeeId(employeeId) {
    try {
      const saleFinderByEmployeeId = await Sale.findOne({
        where: {
          employee_id: employeeId,
        },
        attributes: salesAttributes,
      });

      if (!saleFinderByEmployeeId) return null;

      return saleFinderByEmployeeId;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByProducts(products) {
    try {
      const salesFinderByProducts = await Sale.findAll({
        where: {
          products: { [Op.like]: `%${products}%` },
        },
        attributes: salesAttributes,
      });

      if (!salesFinderByProducts) return null;

      return salesFinderByProducts;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchDate(date) {
    try {
      const salesFinderDate = await Sale.findAll({
        where: {
          date: { [Op.startsWith]: date },
        },
        attributes: salesAttributes,
      });

      if (!salesFinderDate) return null;

      return salesFinderDate;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByHour(hour) {
    try {
      const salesFinderByHour = await Sale.findAll({
        where: {
          hour: { [Op.startsWith]: hour },
        },
        attributes: salesAttributes,
      });

      if (!salesFinderByHour) {
        return null;
      }

      return salesFinderByHour;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new SalesSearchSalesData();
