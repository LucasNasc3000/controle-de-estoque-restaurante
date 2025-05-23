"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Output = require('../../models/Output'); var _Output2 = _interopRequireDefault(_Output);

class OutputsList {
  async Store(data) {
    const newOutput = await _Output2.default.create(data);
    return newOutput;
  }

  async Update(id, data) {
    const output = await _Output2.default.findByPk(id);

    if (!output) return 'saída não encontrada';

    const newOutputData = await output.update(data);

    return newOutputData;
  }
}

exports. default = new OutputsList();
