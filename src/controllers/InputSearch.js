import Input from "../models/Input";

class InputSearchController {
  async Search(req, res) {
    try {
      const { searchValue, searchParam } = req.body;
      const inputFinder = await Input.findAll({
        where: {
          searchParam: searchValue,
        },
        attributes: ['id', 'email', 'nome', 'isbanned'],
      });

      // Colocar ao menos as validações abaixo em uma pasta utils, já que o where não pode ser
      // dinâmico

      if (!inputFinder) {
        res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      if (inputFinder === null || inputFinder === '') return res.json('Usuário não encontrado');

      return res.json(inputFinder);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new InputSearchController();
