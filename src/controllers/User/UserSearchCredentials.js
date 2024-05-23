import UserSearchCredentials from "../../repositories/User/UserSearchCredentials";

class UsersSearchCredentialsController {
  async SearchByID(req, res) {
    const { id } = req.params;

    if(!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userIDFinder = await UserSearchCredentials.SearchById(id);

    if(!userIDFinder) {
      return res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(userIDFinder);
  }

  async SearchByName(req, res) {
    const { name } = req.params;

    if(!name) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userNameFinder = await UserSearchCredentials.SearchByName(name);

    if(!userNameFinder) {
      return res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(userNameFinder);
  }

  async SearchByEmail(req, res) {
    const { email } = req.params;

    if(!email) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userEmailFinder = await UserSearchCredentials.SearchByEmail(email);

    if(!userEmailFinder) {
      return res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(userEmailFinder);
  }
}

export default new UsersSearchCredentialsController();
