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

      return salesFinderByHour;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new SalesSearchSalesData();
