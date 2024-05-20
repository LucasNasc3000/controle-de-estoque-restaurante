import InputMethods from "../../repositories/Input/Input";
import inputsValidations from "../../validations/Inputs";

class InputController {
  async store(req, res) {

   const validation = inputsValidations.CheckForEmptyFields(req.body);

    switch(validation) {
      case 'Empty Field(s)':
        res.status(500).json({
          errors: ['Um dos campos não foi preenchido'],
        });
        break;

      case ('Type must be int'):
        res.status(500).json({
          errors: ['O tipo deve ser inteiro'],
        });
        break;

      case ('Type must be float'):
        res.status(500).json({
          errors: ['O tipo deve ser float'],
        });
        break;
    }

    console.log(validation);

    const store = await InputMethods.Store(req.body)

    return res.status(201).json(store);
  }

  async index(req, res) {
    const inputList = await InputMethods.List();

    if(inputList === null) {
      res.status(400).json({
        errors: ['Ocorreu um erro interno ou não há produtos cadastrados'],
      });
    }

    return res.status(200).send(inputList);
  }

  async update(req, res) {
    const { id } = req.params;

    if(!id) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
    // requisições como insomnia.
    const inputUpdate = await InputMethods.Update(id, req.body);

    if(inputUpdate === null) {
      res.status(400).json({
        errors: ['Insumo não registrado'],
      });
    }

    console.log(inputUpdate);
    return res.status(200).send(inputUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;
    if(!id) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputDelete = await InputMethods.Delete(id);

    if(inputDelete === null) {
      res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }

    return res.json(`insumo ${id} deletado`);
  }
}

export default new InputController();
