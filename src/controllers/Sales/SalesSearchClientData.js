/* eslint-disable consistent-return */
import { NotFound } from '../../errors/notFound';
import { InternalServerError } from '../../errors/serverErrors';
import SalesSearchClientData from '../../repositories/Sales/SalesSearchClientData';

class SalesSearchClientDataController {
  async SearchByClientName(req, res, next) {
    try {
      const { clientname } = req.params;

      const saleClientNameFinder = await
      SalesSearchClientData.SearchByClientName(clientname);

      if (!saleClientNameFinder) throw new InternalServerError('Erro interno');
      if (saleClientNameFinder.length < 1) throw new NotFound('Venda não encontrada');

      return res.status(200).json(saleClientNameFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByAddress(req, res, next) {
    try {
      const { address } = req.params;

      const salesAddressFinder = await SalesSearchClientData.SearchByAddress(address);

      if (!salesAddressFinder) throw new InternalServerError('Erro interno');
      if (salesAddressFinder.length < 1) throw new NotFound('Venda não encontrada');

      return res.status(200).json(salesAddressFinder);
    } catch (err) {
      next(err);
    }
  }

  async SearchByPhoneNumber(req, res, next) {
    try {
      const { phonenumber } = req.params;

      const employeePhoneNumberFinder = await
      SalesSearchClientData.SearchByPhoneNumber(phonenumber);

      if (!employeePhoneNumberFinder) throw new InternalServerError('Erro interno');
      if (employeePhoneNumberFinder.length < 1) throw new NotFound('Venda não encontrada');

      return res.status(200).json(employeePhoneNumberFinder);
    } catch (err) {
      next(err);
    }
  }
}

export default new SalesSearchClientDataController();
