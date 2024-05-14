import Input from "../../models/Input";
import InputMethods from "../../repositories/Input/Input";

class InputController {
  async store(req, res) {
    const {
        type,
        name,
        quantity,
        totalweight,
        weightperunit,
        supplier,
        expirationdate,
        entrydate
      } = req.body;

    const alldata = [];
    let errors = false;

    alldata.push(
      type,
      name,
      quantity,
      totalweight,
      weightperunit,
      supplier,
      expirationdate,
      entrydate
    );

    for(let i = 0; i < alldata.length; i ++) {
      if(alldata[i] === "") errors = true;
    }

    if(errors === true) {
      res.status(500).json({
        errors: ['Um dos campos não foi preenchido'],
      });
    }

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
