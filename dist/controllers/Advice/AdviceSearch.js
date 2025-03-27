/* eslint-disable consistent-return */
import { InternalServerError } from '../../errors/serverErrors';
import AdviceSearch from '../../repositories/Advice/AdviceSearch';

class AdviceSearchController {
  async SearchByEmployeeId(req, res, next) {
    try {
      const { employeeid } = req.params;

      const adviceEmployeeIdFinder = await AdviceSearch.SearchByEmployeeId(employeeid);

      if (!adviceEmployeeIdFinder) throw new InternalServerError('Erro interno');

      if (adviceEmployeeIdFinder.length < 1) {
        return res.status(204).send('Ainda não registrado pelo funcionário');
      }

      return res.status(200).json(adviceEmployeeIdFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new AdviceSearchController();
