"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _Input = require('../../repositories/Input/Input'); var _Input2 = _interopRequireDefault(_Input);
var _QuantityCheck = require('../Input/QuantityCheck'); var _QuantityCheck2 = _interopRequireDefault(_QuantityCheck);

class InputConnectionController {
  async InputUpdate(inputSearchData, outputData) {
    const updatedQuantity = inputSearchData.dataValues.quantity - outputData.unities;

    const updatedData = {
      quantity: updatedQuantity,
    };

    const dataForQuantityCheck = [
      inputSearchData.dataValues.quantity,
      inputSearchData.dataValues.minimun_quantity,
      inputSearchData.dataValues.name,
      inputSearchData.dataValues.rateisnear,
      updatedData.quantity,
    ];

    const check = await _QuantityCheck2.default.QuantityCheck(dataForQuantityCheck);

    if (check) {
      // eslint-disable-next-line default-case
      switch (check[0]) {
        case 'rate is near':
          await _Input2.default.Update(inputSearchData.dataValues.id, updatedData);
          return check;

        case 'limit reached':
          return check;
      }

      if (check === 'no destinataries') return 'no destinataries';
    }

    await _Input2.default.Update(inputSearchData.dataValues.id, updatedData);
  }
}

exports. default = new InputConnectionController();
