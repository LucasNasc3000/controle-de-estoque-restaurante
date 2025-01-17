/* eslint-disable consistent-return */
import { Forbidden } from '../../errors/forbidden';
import { InternalServerError } from '../../errors/serverErrors';
import ExEmployeesSearch from '../../repositories/Employee/ExEmployeeSearch';

class ExEmployeesSearchController {
  async SearchExEmployees(req, res, next) {
    try {
      const { headerid } = req.headers;

      if (headerid) throw new Forbidden('Ação não autorizada para funcionários');

      const exEmployeesFinder = await ExEmployeesSearch.SearchExemployees();

      if (!exEmployeesFinder) throw new InternalServerError('Erro interno');

      return res.status(200).json(exEmployeesFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new ExEmployeesSearchController();
