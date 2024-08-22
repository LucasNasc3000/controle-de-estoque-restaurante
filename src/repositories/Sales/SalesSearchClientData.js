import { Op } from 'sequelize';
import Sale from '../../models/Sale';
import salesAttributes from './Attributes';

class SalesSearchClientData {
  async SearchByClientName(clientName) {
    const SaleFinder = await Sale.findAll({
      where: {
        client_name: { [Op.startsWith]: clientName },
      },
      attributes: salesAttributes,
    });

    return SaleFinder;
  }

  async SearchByPhoneNumber(phoneNumber) {
    const SaleFinderByPhoneNumber = await Sale.findAll({
      where: {
        phone_number: phoneNumber,
      },
      attributes: salesAttributes,
    });

    return SaleFinderByPhoneNumber;
  }

  async SearchByAddress(address) {
    const saleFinderByAddress = await Sale.findAll({
      where: {
        address,
      },
      attributes: salesAttributes,
    });

    return saleFinderByAddress;
  }
}

export default new SalesSearchClientData();
