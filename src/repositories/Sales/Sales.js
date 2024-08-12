import Sales from '../../models/Sale';

class SalesList {
  async List() {
    try {
      const sales = await Sales.findAll({
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
        order: [['id', 'DESC']],
      });

      if (sales.length <= 0) return null;

      return sales;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newSale = await Sales.create(data);

      if (!newSale) return null;

      return newSale;
    } catch (e) {
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const findSale = await Sales.findByPk(id, {
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

      if (!findSale) {
        return null;
      }

      const saleUpdate = await findSale.update(data);
      return saleUpdate;
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new SalesList();
