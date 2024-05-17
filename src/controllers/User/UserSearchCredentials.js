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

  async SearchByQuantity(req, res) {
    const { quantity } = req.params;

    if(!quantity) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputQuantityFinder = await InputSearchIntegers.SearchByQuantity(quantity);

    if(!inputQuantityFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(inputQuantityFinder);
  }
}

export default new UsersSearchCredentialsController();
