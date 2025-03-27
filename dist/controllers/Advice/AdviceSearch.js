"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _serverErrors = require('../../errors/serverErrors');
var _AdviceSearch = require('../../repositories/Advice/AdviceSearch'); var _AdviceSearch2 = _interopRequireDefault(_AdviceSearch);

class AdviceSearchController {
  async SearchByEmployeeId(req, res, next) {
    try {
      const { employeeid } = req.params;

      const adviceEmployeeIdFinder = await _AdviceSearch2.default.SearchByEmployeeId(employeeid);

      if (!adviceEmployeeIdFinder) throw new (0, _serverErrors.InternalServerError)('Erro interno');

      if (adviceEmployeeIdFinder.length < 1) {
        return res.status(204).send('Ainda não registrado pelo funcionário');
      }

      return res.status(200).json(adviceEmployeeIdFinder);
    } catch (err) {
      next(err);
    }
  }
}

exports. default = new AdviceSearchController();
