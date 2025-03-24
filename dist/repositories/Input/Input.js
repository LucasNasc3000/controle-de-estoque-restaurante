"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Input = require('../../models/Input'); var _Input2 = _interopRequireDefault(_Input);

class InputsList {
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
