import { Op } from 'sequelize';
import Sale from '../../models/Sale';
import salesAttributes from './Attributes';

class SalesSearchSalesData {
  async SearchById(id) {
    const SaleFinder = await Sale.findOne({
      where: {
        id,
      },
      attributes: salesAttributes,
    });

    return SaleFinder;
  }

  async SearchByemployeeId(employeeId) {
    const saleFinderByEmployeeId = await Sale.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: salesAttributes,
    });

    return saleFinderByEmployeeId;
  }

  async SearchByProducts(products) {
    const salesFinderByProducts = await Sale.findAll({
      where: {
        products: { [Op.like]: `%${products}%` },
      },
      attributes: salesAttributes,
    });

    return salesFinderByProducts;
  }

  async SearchDate(date) {
    const salesFinderDate = await Sale.findAll({
      where: {
        date: { [Op.startsWith]: date },
      },
      attributes: salesAttributes,
    });

    return salesFinderDate;
  }

  async SearchByHour(hour) {
    const salesFinderByHour = await Sale.findAll({
      where: {
        hour: { [Op.startsWith]: hour },
      },
      attributes: salesAttributes,
    });

    return salesFinderByHour;
  }
}

export default new SalesSearchSalesData();
