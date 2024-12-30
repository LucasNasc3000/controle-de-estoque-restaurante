import Sales from '../../models/Sale';

class SalesList {
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
