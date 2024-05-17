import UserMethods from "../../repositories/User/User";

class UserController {
  async store(req, res) {
    // Fazer validações aqui tbm

    const userStore = await UserMethods.Store(req.body)

    return res.status(201).json(userStore);
  }

  async index(req, res) {
    const usersList = await UserMethods.List();

    if(usersList === null) {
      res.status(400).json({
        errors: ['Ocorreu um erro interno ou não há usuários cadastrados'],
      });
    }

    return res.status(200).send(usersList);
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
    const userUpdate = await UserMethods.Update(id, req.body);

    if(userUpdate === null) {
      res.status(400).json({
        errors: ['Usuário não registrado'],
      });
    }

    console.log(userUpdate);
    return res.status(200).send(userUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;
    if(!id) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userDelete = await UserMethods.Delete(id);

    if(userDelete === null) {
      res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }

    return res.json(`Usuário ${id} deletado`);
  }
}

export default new UserController();