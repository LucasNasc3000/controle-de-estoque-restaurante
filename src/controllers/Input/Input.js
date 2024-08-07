import InputMethods from '../../repositories/Input/Input';
import Validation from '../../middlewares/fieldValidations/Validation';

// Método para excluir mais de um mas não todos
class InputController {
  async store(req, res) {
    const validations = Validation.MainValidations(req.body);
    const inputValidations = Validation.InputsValidation(req.body);

    if (validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if (inputValidations !== null) {
      return res.status(500).json({
        errors: [inputValidations],
      });
    }

    const store = await InputMethods.Store(req.body);

    return res.status(201).json(store);
  }

  async index(req, res) {
    const inputList = await InputMethods.List();

    if (inputList === null) {
      return res.status(400).json({
        errors: ['Ocorreu um erro interno ou não há produtos cadastrados'],
      });
    }

    return res.status(200).send(inputList);
  }

  async update(req, res) {
    const { id } = req.params;
    const validations = Validation.MainValidations(req.body);
    const inputValidations = Validation.InputsValidation(req.body);

    if (!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    if (validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if (inputValidations !== null) {
      res.status(500).json({
        errors: [inputValidations],
      });
    }

    // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
    // requisições como insomnia.
    const inputUpdate = await InputMethods.Update(id, req.body);

    if (inputUpdate === null) {
      return res.status(400).json({
        errors: ['Insumo não registrado'],
      });
    }

    return res.status(200).send(inputUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputDelete = await InputMethods.Delete(id);

    if (inputDelete === null) {
      return res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }

    return res.json(`insumo ${id} deletado`);
  }

  async DeleteAll(req, res) {
    const inputsTruncate = InputMethods.Truncate();

    if (inputsTruncate === false) {
      return res.status(400).json({
        errors: ['Ocoreru um erro'],
      });
    }

    return res.json('Insumos deletados');
  }
}

export default new InputController();
