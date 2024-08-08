import Sales from '../../repositories/Sales/Sales';
// import Validation from '../../middlewares/fieldValidations/Validation';

class SalesController {
  async store(req, res) {
    // const validations = Validation.MainValidations(req.body, true);
    // const emlpoyeesValidations = Validation.EmployeeValidation(req.body);

    // if (validations !== null) {
    //   return res.status(500).json({
    //     errors: [validations],
    //   });
    // }

    // if (emlpoyeesValidations !== null) {
    //   return res.status(500).json({
    //     errors: [emlpoyeesValidations],
    //   });
    // }

    const salesStore = await Sales.Store(req.body);

    return res.status(201).json(salesStore);
  }

  async index(req, res) {
    const salesList = await Sales.List();

    if (salesList === null) {
      return res.status(400).json({
        errors: ['Ocorreu um erro interno ou não há funcionários cadastrados'],
      });
    }

    return res.status(200).send(salesList);
  }

  async update(req, res) {
    const { id } = req.params;
    // const validations = Validation.MainValidations(req.body, true);
    // const usersValidations = Validation.EmployeeValidation(req.body);

    // if (validations !== null) {
    //   return res.status(500).json({
    //     errors: [validations],
    //   });
    // }

    // if (usersValidations !== null) {
    //   return res.status(500).json({
    //     errors: [usersValidations],
    //   });
    // }

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
        errors: ['Funcionário não registrado'],
      });
    }

    return res.status(200).send(salesUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const salesDelete = await Sales.Delete(id);

    if (salesDelete === null) {
      return res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }

    return res.json(`Venda ${id} deletada`);
  }

  async DeleteAll(req, res) {
    const salesTruncate = Sales.Truncate();

    if (salesTruncate === false) {
      return res.status(400).json({
        errors: ['Ocoreru um erro'],
      });
    }

    return res.json('Vendas deletados');
  }
}

export default new SalesController();
