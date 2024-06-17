import Input from "../../models/Input";
import InputDeleteMany from "./InputDeleteMany";
import InputSearchDates from "./InputSearchDates";
import InputSearchFloats from "./InputSearchFloats";
import InputSearchIntegers from "./InputSearchIntegers";
import InputSearchSimpleStrings from "./InputSearchSimpleStrings";

class InputsList {
  async List() {
    try {
      const inputs = await Input.findAll({
        attributes: [
          'id',
          'type',
          'name',
          'quantity',
          'totalweight',
          'weightperunit',
          'supplier',
          'expirationdate',
          'entrydate',
          'created_at',
          'updated_at'
        ],
        order: [['id', 'DESC']],
      });

      if(inputs.length <= 0) return null;

      return inputs;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newInput = await Input.create(data);

      if(!newInput) return null;

      return newInput;
    } catch(e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const input = await Input.findByPk(id);

      if (!input) {
        return null;
      }

      const newInputData = await input.update(data);
      return newInputData;
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  async Delete(id) {
    try {

      const input = await Input.findByPk(id);

      if (!input) {
        return null;
      }

      await input.destroy();
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  async DeleteMany(where, data) {
    switch(where) {
      case 'name':
        const findByName = InputSearchSimpleStrings.SearchByName(data);
        if(!findByName) return null;
        await InputDeleteMany.DeleteMany(where, data);
        return `Insumos com ${where}: ${data} deletados`

      case 'type':
        const findByType = InputSearchSimpleStrings.SearchByType(data);
        if(!findByType) return null;
        await InputDeleteMany.DeleteMany(where, data);
        return `Insumos com ${where}: ${data} deletados`

      case 'quantity':
        const findByQuantity = InputSearchIntegers.SearchByQuantity(data);
        if(!findByQuantity) return null;
        await InputDeleteMany.DeleteMany(where, data);
        return `Insumos com ${where}: ${data} deletados`

      case 'totalWeight':
        const findByTotalWeight = InputSearchFloats.SearchByTotalWeight(data);
        if(!findByTotalWeight) return null;
        await InputDeleteMany.DeleteMany(where, data);
        return `Insumos com ${where}: ${data} deletados`

      case 'weightperunit':
        const findByWeightPerUnit = InputSearchFloats.SearchByWeightPerUnit(data);
        if(!findByWeightPerUnit) return null;
        await InputDeleteMany.DeleteMany(where, data);
        return `Insumos com ${where}: ${data} deletados`

      case 'supplier':
        const findBySupplier = InputSearchSimpleStrings.SearchBySupplier(data);
        if(!findBySupplier) return null;
        await InputDeleteMany.DeleteMany(where, data);
        return `Insumos com ${where}: ${data} deletados`

      case 'expirationDate':
        const findByExpirationDate = InputSearchDates.SearchByExpirationDate(data);
        if(!findByExpirationDate) return null;
        await InputDeleteMany.DeleteMany(where, data);
        return `Insumos com ${where}: ${data} deletados`

      case 'entrydate':
        const findByEntryDate = InputSearchDates.SearchByEntryDate(data);
        if(!findByEntryDate) return null;
        await InputDeleteMany.DeleteMany(where, data);
        return `Insumos com ${where}: ${data} deletados`
    }
  }

  // Somente para o desenvolvimento
  async Truncate() {
    try {
      await Input.truncate();
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default new InputsList();
