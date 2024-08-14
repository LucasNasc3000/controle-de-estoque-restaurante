import { Op } from 'sequelize';
import Sale from '../../models/Sale';
import salesAttributes from './Attributes';

class SalesSearchClientData {
  async SearchByClientName(clientName) {
    try {
      const SaleFinder = await Sale.findAll({
        where: {
          client_name: { [Op.startsWith]: clientName },
        },
        attributes: salesAttributes,
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
          phone_number: phoneNumber,
        },
        attributes: salesAttributes,
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
          address,
        },
        attributes: salesAttributes,
      });

      if (!saleFinderByAddress) return null;

      return saleFinderByAddress;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new SalesSearchClientData();
