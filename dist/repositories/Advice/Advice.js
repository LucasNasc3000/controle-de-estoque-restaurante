"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Advice = require('../../models/Advice'); var _Advice2 = _interopRequireDefault(_Advice);

class AdviceList {
  async Store(data) {
    const newAdvice = await _Advice2.default.create(data);
    return newAdvice;
  }

  async Update(id, data) {
    const findAdvice = await _Advice2.default.findByPk(id);

    const adviceUpdate = await findAdvice.update(data);

    return adviceUpdate;
  }

  async Delete(id) {
    const findAdvice = await _Advice2.default.findByPk(id);

    if (!findAdvice) return 'Lembrete não encontrado';

    const adviceDelete = await findAdvice.destroy();

    return adviceDelete;
  }
}

exports. default = new AdviceList();
