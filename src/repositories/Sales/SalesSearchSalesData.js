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
      order: [['id', 'DESC']],
    });

    return SaleFinder;
  }

  async SearchByemployeeId(employeeId) {
    const saleFinderByEmployeeId = await Sale.findAll({
      where: {
        employee_id: employeeId,
      },
      attributes: salesAttributes,
      order: [['id', 'DESC']],
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

  async SearchDateForDashboard(date, employeeId) {
    const salesFinderDate = await Sale.count({
      where: {
        date,
        employee_id: employeeId,
      },
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

  async SearchByPrice(price) {
    const salesFinderByPrice = await Sale.findAll({
      where: {
        price: { [Op.startsWith]: price },
      },
      attributes: salesAttributes,
      order: [['id', 'DESC']],
    });

    return salesFinderByPrice;
  }
}

export default new SalesSearchSalesData();
