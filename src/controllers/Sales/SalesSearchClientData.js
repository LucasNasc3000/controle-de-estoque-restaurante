import SalesSearchClientData from '../../repositories/Sales/SalesSearchClientData';

class SalesSearchClientDataController {
  async SearchByClientName(req, res) {
    const { ClientName } = req.params;

    if (!ClientName) {
      return res.status(500).json({
        errors: ['Nome do cliente não informado'],
      });
    }

    const saleClientNameFinder = await
    SalesSearchClientData.SearchByClientName(ClientName);

    if (!saleClientNameFinder) {
      return res.status(400).json({
        errors: ['Venda não encontrada'],
      });
    }

    return res.json(saleClientNameFinder);
  }

  async SearchByAddress(req, res) {
    const { address } = req.params;

    if (!address) {
      return res.status(500).json({
        errors: ['Endereço não informado'],
      });
    }

    const salesAddressFinder = await SalesSearchClientData.SearchByAddress(address);

    if (!salesAddressFinder) {
      return res.status(400).json({
        errors: ['Venda não encontrada'],
      });
    }

    return res.json(salesAddressFinder);
  }

  async SearchByPhoneNumber(req, res) {
    const { phoneNumber } = req.params;

    if (!phoneNumber) {
      return res.status(500).json({
        errors: ['Número de telefone não informado'],
      });
    }

    const employeePhoneNumberFinder = await
    SalesSearchClientData.SearchByPhoneNumber(phoneNumber);

    if (!employeePhoneNumberFinder) {
      return res.status(400).json({
        errors: ['Venda não encontrada'],
      });
    }

    return res.json(employeePhoneNumberFinder);
  }
}

export default new SalesSearchClientDataController();
