import LogList from "../../repositories/User/Log";
import Validation from "../../validations/Validation";

class LogsController{
  async store(req, res) {
    try {
      const validations = Validation.MainValidations(req.body, false, true);
      const logValidation = Validation.LogsValidation(req.body);

      if(validations !== null) {
        return res.status(500).json({
          errors: [validations],
        });
      }

      if(logValidation !== null) {
        return res.status(500).json({
          errors: [logValidation],
        });
      }

      const store = await LogList.Store(req.body);

      return res.status(201).json(store);
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new LogsController();
