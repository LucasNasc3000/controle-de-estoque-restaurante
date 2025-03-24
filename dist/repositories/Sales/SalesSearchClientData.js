"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Sale = require('../../models/Sale'); var _Sale2 = _interopRequireDefault(_Sale);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class SalesSearchClientData {
  async SearchByClientName(clientName) {
    const SaleFinder = await _Sale2.default.findAll({
      where: {
        client_name: { [_sequelize.Op.startsWith]: clientName },
      },
      attributes: _Attributes2.default,
    });

    return SaleFinder;
  }

  async SearchByPhoneNumber(phoneNumber) {
    const SaleFinderByPhoneNumber = await _Sale2.default.findOne({
      where: {
        phone_number: phoneNumber,
      },
      attributes: _Attributes2.default,
    });

    return SaleFinderByPhoneNumber;
  }

  async SearchByAddress(address) {
    const saleFinderByAddress = await _Sale2.default.findOne({
      where: {
        address,
      },
      attributes: _Attributes2.default,
    });

    return saleFinderByAddress;
  }
}

exports. default = new SalesSearchClientData();
