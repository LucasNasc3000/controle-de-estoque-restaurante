import { Op } from 'sequelize';
import Sale from '../../models/Sale';

class SalesSearchSalesData {
  async SearchById(id) {
    try {
      const SaleFinder = await Sale.findOne({
        where: {
          id: { [Op.like]: `%${id}%` },
        },
        attributes: [
          'id',
          'date',
          'hour',
          'client_name',
          'phone_number',
          'address',
          'products',
          'employee_id',
          'created_at',
          'updated_at',
        ],
      });

      if (SaleFinder.length <= 0) return null;

      return SaleFinder;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByemployeeId(employeeId) {
    try {
      const saleFinderByEmployeeId = await Sale.findAll({
        where: {
          employee_id: { [Op.like]: `%${employeeId}%` },
        },
        attributes: [
          'id',
          'date',
          'hour',
          'client_name',
          'phone_number',
          'address',
          'products',
          'employee_id',
          'created_at',
          'updated_at',
        ],
      });

      if (!saleFinderByEmployeeId) {
        return null;
      }

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
        attributes: [
          'id',
          'date',
          'hour',
          'client_name',
          'phone_number',
          'address',
          'products',
          'employee_id',
          'created_at',
          'updated_at',
        ],
      });

      if (!salesFinderByProducts) {
        return null;
      }

      return salesFinderByProducts;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchDate(date) {
    try {
      const salesFinderDate = await Sale.findAll({
        where: {
          date: { [Op.like]: `%${date}%` },
        },
        attributes: [
          'id',
          'date',
          'hour',
          'client_name',
          'phone_number',
          'address',
          'products',
          'employee_id',
          'created_at',
          'updated_at',
        ],
      });

      if (!salesFinderDate) {
        return null;
      }

      return salesFinderDate;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByHour(hour) {
    try {
      const salesFinderByHour = await Sale.findAll({
        where: {
          hour: { [Op.like]: `%${hour}%` },
        },
        attributes: [
          'id',
          'date',
          'hour',
          'client_name',
          'phone_number',
          'address',
          'products',
          'employee_id',
          'created_at',
          'updated_at',
        ],
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
