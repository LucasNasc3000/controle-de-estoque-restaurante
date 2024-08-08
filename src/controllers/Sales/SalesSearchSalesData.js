import SalesSearchSalesData from '../../repositories/Sales/SalesSearchSalesData';

class SalesSearchSalesDataController {
  async SearchById(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(500).json({
        errors: ['Id da venda não informado'],
      });
    }

    const saleIdFinder = await
    SalesSearchSalesData.SearchById(id);

    if (!saleIdFinder) {
      return res.status(400).json({
        errors: ['Venda não encontrada'],
      });
    }

    return res.json(saleIdFinder);
  }

  async SearchByEmployeeId(req, res) {
    const { employeeid } = req.params;

    if (!employeeid) {
      return res.status(500).json({
        errors: ['Id do funcionário não informado'],
      });
    }

    const salesEmployeeIdFinder = await SalesSearchSalesData.SearchByemployeeId(employeeid);

    if (!salesEmployeeIdFinder) {
      return res.status(400).json({
        errors: ['Venda não encontrada'],
      });
    }

    return res.json(salesEmployeeIdFinder);
  }

  async SearchByProducts(req, res) {
    const { products } = req.params;

    if (!products) {
      return res.status(500).json({
        errors: ['Produto não informado'],
      });
    }

    const employeeProductsFinder = await
    SalesSearchSalesData.SearchByProducts(products);

    if (!employeeProductsFinder) {
      return res.status(400).json({
        errors: ['Venda não encontrada'],
      });
    }

    return res.json(employeeProductsFinder);
  }

  async SearchByDate(req, res) {
    const { date } = req.params;

    if (!date) {
      return res.status(500).json({
        errors: ['Data da venda não informada'],
      });
    }

    const employeeDateFinder = await
    SalesSearchSalesData.SearchDate(date);

    if (!employeeDateFinder) {
      return res.status(400).json({
        errors: ['Venda não encontrada'],
      });
    }

    return res.json(employeeDateFinder);
  }

  async SearchByHour(req, res) {
    const { hour } = req.params;

    if (!hour) {
      return res.status(500).json({
        errors: ['Hora da venda não informada'],
      });
    }

    const employeeHourFinder = await
    SalesSearchSalesData.SearchByHour(hour);

    if (!employeeHourFinder) {
      return res.status(400).json({
        errors: ['Venda não encontrada'],
      });
    }

    return res.json(employeeHourFinder);
  }
}

export default new SalesSearchSalesDataController();
