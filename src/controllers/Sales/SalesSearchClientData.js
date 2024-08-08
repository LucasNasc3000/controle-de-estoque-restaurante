import SalesSearchClientData from '../../repositories/Sales/SalesSearchClientData';

class SalesSearchClientDataController {
  async SearchByClientName(req, res) {
    const { clientname } = req.params;

    if (!clientname) {
      return res.status(500).json({
        errors: ['Nome do cliente não informado'],
      });
    }

    const saleClientNameFinder = await
    SalesSearchClientData.SearchByClientName(clientname);

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
    const { phonenumber } = req.params;

    if (!phonenumber) {
      return res.status(500).json({
        errors: ['Número de telefone não informado'],
      });
    }

    const employeePhoneNumberFinder = await
    SalesSearchClientData.SearchByPhoneNumber(phonenumber);

    if (!employeePhoneNumberFinder) {
      return res.status(400).json({
        errors: ['Venda não encontrada'],
      });
    }

    return res.json(employeePhoneNumberFinder);
  }
}

export default new SalesSearchClientDataController();
