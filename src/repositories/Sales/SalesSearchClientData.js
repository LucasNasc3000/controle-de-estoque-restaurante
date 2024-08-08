import { Op } from 'sequelize';
import Sale from '../../models/Sale';

class SalesSearchClientData {
  async SearchByClientName(clientName) {
    try {
      const SaleFinder = await Sale.findAll({
        where: {
          client_name: { [Op.like]: `%${clientName}%` },
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

  async SearchByPhoneNumber(phoneNumber) {
    try {
      const SaleFinderByPhoneNumber = await Sale.findAll({
        where: {
          phone_number: { [Op.like]: `%${phoneNumber}%` },
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

      if (!SaleFinderByPhoneNumber) {
        return null;
      }

      return SaleFinderByPhoneNumber;
    } catch (e) {
      return console.log(e);
    }
  }

  async SearchByAddress(address) {
    try {
      const saleFinderByAddress = await Sale.findAll({
        where: {
          address: { [Op.like]: `%${address}%` },
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

      if (!saleFinderByAddress) {
        return null;
      }

      return saleFinderByAddress;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new SalesSearchClientData();
