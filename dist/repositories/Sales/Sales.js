"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Sale = require('../../models/Sale'); var _Sale2 = _interopRequireDefault(_Sale);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class SalesList {
  async List() {
    const sales = await _Sale2.default.findAll({
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return sales;
  }

  async Store(data) {
    const newSale = await _Sale2.default.create(data);
    return newSale;
  }

  async Update(id, data) {
    const findSale = await _Sale2.default.findByPk(id);

    if (!findSale) return 'venda não encontrada';

    const saleUpdate = await findSale.update(data);

    return saleUpdate;
  }
}

exports. default = new SalesList();
