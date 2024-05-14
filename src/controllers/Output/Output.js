import OutputMethods from "../../repositories/Output/Output";
import InputSearchSimpleStrings from "../../repositories/Input/InputSearchSimpleStrings";
import InputMethods from "../../repositories/Input/Input";

class OutputController {
  async store(req, res) {
    const {
        date,
        hour,
        name,
        type,
        weight,
        weightperunit,
        unities
      } = req.body;

    const alldata = [];
    let errors = false;

    alldata.push(
        date,
        hour,
        name,
        type,
        weight,
        weightperunit,
        unities
    );

    for(let i = 0; i < alldata.length; i ++) {
      if(alldata[i] === "") errors = true;
    }

    if(errors === true) {
      res.status(500).json({
        errors: ['Um dos campos não foi preenchido'],
      });
    }

    const store = await OutputMethods.Store(req.body)

    // Ver se dá pra pegar o id
    const inputExists = await InputSearchSimpleStrings.SearchByType(type);

    // if(inputExists) this.inputUpdate(unities, weight, weightperunit);

    return res.status(201).json(store);
  }

  // async inputUpdate(unities, weight, weightperunit) {
  //     const updateQuantity
  // }

  async index(req, res) {
    const outputsList = await OutputMethods.List();

    if(outputsList === null) {
      res.status(400).json({
        errors: ['Ocorreu um erro interno ou não há produtos cadastrados'],
      });
    }

    return res.status(200).send(outputsList);
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
    const outputUpdate = await OutputMethods.Update(id, req.body);

    if(outputUpdate === null) {
      res.status(400).json({
        errors: ['Insumo não registrado'],
      });
    }

    console.log(outputUpdate);
    return res.status(200).send(outputUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;
    if(!id) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputDelete = await InputMethods.Delete(id);

    if(outputDelete === null) {
      res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }

    return res.json(`insumo ${id} deletado`);
  }
}

export default new OutputController();
