import Sales from '../../models/Sale';
import salesAttributes from './Attributes';

class SalesList {
  async List() {
    const sales = await Sales.findAll({
      attributes: salesAttributes,
      order: [['id', 'DESC']],
    });

    return sales;
  }

  async Store(data) {
    const newSale = await Sales.create(data);
    return newSale;
  }

  async Update(id, data) {
    const findSale = await Sales.findByPk(id);

    if (!findSale) return 'venda não encontrada';

    const saleUpdate = await findSale.update(data);

    return saleUpdate;
  }
}

export default new SalesList();
