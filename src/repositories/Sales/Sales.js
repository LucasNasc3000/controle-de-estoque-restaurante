import Sales from '../../models/Sale';
import salesAttributes from './Attributes';

class SalesList {
  async List() {
    try {
      const sales = await Sales.findAll({
        attributes: salesAttributes,
        order: [['id', 'DESC']],
      });

      return sales;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newSale = await Sales.create(data);
      return newSale;
    } catch (e) {
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const findSale = await Sales.findByPk(id);

      if (!findSale) return 'venda não encontrada';

      const saleUpdate = await findSale.update(data);

      return saleUpdate;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new SalesList();
