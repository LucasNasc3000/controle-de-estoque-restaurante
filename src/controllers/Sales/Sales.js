import Sales from '../../repositories/Sales/Sales';
import Validation from '../../middlewares/fieldValidations/Validation';

class SalesController {
  async store(req, res) {
    const validations = Validation.MainValidations(req.body, false, false, true);
    const salesValidations = Validation.SalesValidation(req.body);

    console.log(validations);
    console.log(salesValidations);

    if (validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if (salesValidations !== null) {
      return res.status(500).json({
        errors: [salesValidations],
      });
    }

    const salesStore = await Sales.Store(req.body);

    return res.status(201).json(salesStore);
  }

  async index(req, res) {
    const salesList = await Sales.List();

    if (salesList === null) {
      return res.status(400).json({
        errors: ['Ocorreu um erro interno ou não há vendas cadastrados'],
      });
    }

    return res.status(200).send(salesList);
  }

  async update(req, res) {
    const { id } = req.params;
    const validations = Validation.MainValidations(req.body, false, false, true);
    const salesValidations = Validation.SalesValidation(req.body);

    if (validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if (salesValidations !== null) {
      return res.status(500).json({
        errors: [salesValidations],
      });
    }

    if (!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
    // requisições como insomnia.
    const salesUpdate = await Sales.Update(id, req.body);

    if (salesUpdate === null) {
      return res.status(400).json({
        errors: ['Venda não registrada'],
      });
    }

    return res.status(200).send(salesUpdate);
  }
}

export default new SalesController();
