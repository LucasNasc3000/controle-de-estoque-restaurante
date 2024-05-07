import Input from "../models/Input";
import InputMethods from "../repositories/Input";

class InputController {
  async store(req, res) {
    const { type, name, quantity, totalweight, weightperunit,
    supplier, expirationdate, entrydate } = req.body;

    // const alldata = [];
    // let errors = false;

    // alldata.push(
    //   id,
    //   type,
    //   name,
    //   quantity,
    //   totalweight,
    //   weightperunit,
    //   supplier,
    //   expirationdate,
    //   entrydate
    // );

    // for(let i = 0; i < alldata.length; i ++) {
    //   if(alldata[i] === "") errors = true;
    // }

    // if(errors === true) {
    //   res.status(500).json({
    //     errors: ['Um dos campos não foi preenchido'],
    //   });
    // }

    const store =  await InputMethods.Store(
      type,
      name,
      quantity,
      totalweight,
      weightperunit,
      supplier,
      expirationdate,
      entrydate
    )

    console.log(store);
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

    const inputUpdate = InputMethods.Update(req.params.id, req.body);

    if(inputDelete === null) {
      res.status(400).json({
        errors: ['Insumo não registrado'],
      });
    }

    return res.status(200).send(inputUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;
    if(!id) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const inputDelete = InputMethods.Delete(id);

    if(inputDelete === null) {
      res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }
  }
}

export default new InputController();
