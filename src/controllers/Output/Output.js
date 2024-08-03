import OutputMethods from '../../repositories/Output/Output';
import InputSearchSimpleStrings from '../../repositories/Input/InputSearchSimpleStrings';
import InputConnection from './InputConnection';
import Validations from '../../validations/Validation';

class OutputController {
  async store(req, res) {
    const { name } = req.body;
    const validations = Validations.MainValidations(req.body);
    const outputsValidations = Validations.OutputsValidation(req.body);

    // O return evita a quebra da aplicação e outras requisições podem ser feitas mesmo que seja
    // retornado um erro, como o erro 500 abaixo, por exemplo.
    if (validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if (outputsValidations !== null) {
      return res.status(500).json({
        errors: [outputsValidations],
      });
    }

    const inputExists = await InputSearchSimpleStrings.SearchByName(name);

    if (inputExists.length <= 0) {
      return res.status(400).json({
        errors: [`Ocorreu um erro interno ou o insumo ${name} não está cadastrado`],
      });
    }

    const inputConnection = await InputConnection.InputUpdate(inputExists, req.body);

    if (inputConnection) {
      if (inputConnection[0] === 'limit reached') {
        return res.status(400).json({
          errors: [`Não é possível registrar novas saídas: o limite do insumo ${inputConnection[1]} foi alcançado.`],
        });
      }

      if (inputConnection[0] === 'rate is near') {
        await InputConnection.InputUpdate(inputExists, req.body);
        const store = await OutputMethods.Store(req.body);

        return res.json({
          warning: [`ATENÇÃO: Faltam 15 unidades ou menos para o limite do insumo ${inputConnection[1]}.`],
          saida: [
            store,
          ],
        });
      }
    } else {
      return res.status(400).json({
        errors: ['Não há emails destinatários cadastrados ou as permissões estão incorretas.'],
      });
    }

    const store = await OutputMethods.Store(req.body);
    return res.status(201).json(store);
  }

  async index(req, res) {
    const outputsList = await OutputMethods.List();

    if (outputsList === null) {
      return res.status(400).json({
        errors: ['Ocorreu um erro interno ou não há produtos cadastrados'],
      });
    }

    return res.status(200).send(outputsList);
  }

  async update(req, res) {
    const { id } = req.params;
    const validations = Validations.MainValidations(req.body);
    const outputsValidations = Validations.OutputsValidation(req.body);

    if (validations !== null) {
      return res.status(500).json({
        errors: [validations],
      });
    }

    if (outputsValidations !== null) {
      return res.status(500).json({
        errors: [outputsValidations],
      });
    }

    if (!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    // Funciona sem await mas não retorna os dados na requisição caso ela seja feita com um app de
    // requisições como insomnia.
    const outputUpdate = await OutputMethods.Update(id, req.body);

    if (outputUpdate === null) {
      return res.status(400).json({
        errors: ['Insumo não registrado'],
      });
    }

    console.log(outputUpdate);
    return res.status(200).send(outputUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputDelete = await OutputMethods.Delete(id);

    if (outputDelete === null) {
      return res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }

    return res.json(`saída ${id} deletado`);
  }

  async DeleteAll(req, res) {
    const outputsTruncate = OutputMethods.Truncate();

    if (outputsTruncate === false) {
      return res.status(400).json({
        errors: ['Ocoreru um erro'],
      });
    }

    return res.json('Saídas deletados');
  }
}

export default new OutputController();
