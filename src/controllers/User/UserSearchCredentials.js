import UserSearchCredentials from "../../repositories/User/UserSearchCredentials";

class UsersSearchCredentialsController {
  async SearchByID(req, res) {
    const { id } = req.params;

    if(!id) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userIDFinder = await UserSearchCredentials.SearchById(id);

    if(!userIDFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(userIDFinder);
  }

  async SearchByName(req, res) {
    const { name } = req.params;

    if(!name) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userNameFinder = await UserSearchCredentials.SearchByName(name);

    if(!userNameFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(userNameFinder);
  }

  async SearchByEmail(req, res) {
    const { email } = req.params;

    if(!email) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userEmailFinder = await UserSearchCredentials.SearchByEmail(email);

    if(!userEmailFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(userEmailFinder);
  }
}

export default new UsersSearchCredentialsController();
