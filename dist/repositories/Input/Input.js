"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Input = require('../../models/Input'); var _Input2 = _interopRequireDefault(_Input);
var _Attributes = require('./Attributes'); var _Attributes2 = _interopRequireDefault(_Attributes);

class InputsList {
  async List() {
    const inputs = await _Input2.default.findAll({
      attributes: _Attributes2.default,
      order: [['id', 'DESC']],
    });

    return inputs;
  }

  async Store(data) {
    const newInput = await _Input2.default.create(data);
    return newInput;
  }

  async Update(id, data) {
    const input = await _Input2.default.findByPk(id);

    if (!input) return 'insumo não encontrado';

    const newInputData = await input.update(data);

    return newInputData;
  }
}

exports. default = new InputsList();
