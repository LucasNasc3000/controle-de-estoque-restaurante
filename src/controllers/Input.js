import Input from "../models/Input";
import InputMethods from "../repositories/Input";

class InputController {
  async store(req, res) {
   const store = InputMethods.Store(req.body)
   return res.status(201).send(store);
  }

  async index(req, res) {
   const inputList = InputMethods.List();
   return res.status(200).send(inputList);
  }

  async update(req, res) {
   const inputUpdate = InputMethods.Update(req.params.id);
   res.send(inputUpdate);
  }

  async delete(req, res) {

  }
}

export default new InputController();
