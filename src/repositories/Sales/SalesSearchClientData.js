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
      order: [['id', 'DESC']],
    });

    return SaleFinder;
  }

  async SearchByPhoneNumber(phoneNumber) {
    const SaleFinderByPhoneNumber = await Sale.findOne({
      where: {
        phone_number: phoneNumber,
      },
      attributes: salesAttributes,
      order: [['id', 'DESC']],
    });

    return SaleFinderByPhoneNumber;
  }

  async SearchByAddress(address) {
    const saleFinderByAddress = await Sale.findOne({
      where: {
        address,
      },
      attributes: salesAttributes,
      order: [['id', 'DESC']],
    });

    return saleFinderByAddress;
  }
}

export default new SalesSearchClientData();
