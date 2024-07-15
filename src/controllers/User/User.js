import UserMethods from "../../repositories/User/User";
import Validation from "../../validations/Validation";

class UserController {
  async store(req, res) {
    const validations = Validation.MainValidations(req.body, true);
    const usersValidations = Validation.UserValidation(req.body);

    if(validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if(usersValidations !== null) {
      return res.status(500).json({
        errors: [usersValidations],
      });
    }

    const userStore = await UserMethods.Store(req.body);

    return res.status(201).json(userStore);
  }

  async index(req, res) {
    const usersList = await UserMethods.List();

    if(usersList === null) {
      return res.status(400).json({
        errors: ['Ocorreu um erro interno ou não há usuários cadastrados'],
      });
    }

    return res.status(200).send(usersList);
  }

  async update(req, res) {
    const { id } = req.params;
    const validations = Validation.MainValidations(req.body, true);
    const usersValidations = Validation.UserValidation(req.body);

    if(validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if(usersValidations !== null) {
      return res.status(500).json({
        errors: [usersValidations],
      });
    }

    if(!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
    // requisições como insomnia.
    const userUpdate = await UserMethods.Update(id, req.body);

    if(userUpdate === null) {
      return res.status(400).json({
        errors: ['Usuário não registrado'],
      });
    }

    return res.status(200).send(userUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;
    if(!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userDelete = await UserMethods.Delete(id);

    if(userDelete === null) {
      return res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }

    return res.json(`Usuário ${id} deletado`);
  }

  async DeleteAll(req, res) {
    const userTruncate = UserMethods.Truncate();

    if(userTruncate === false) {
      return res.status(400).json({
        errors: ['Ocoreru um erro'],
      });
    }

    return res.json('Usuários deletados');
  }
}

export default new UserController();
