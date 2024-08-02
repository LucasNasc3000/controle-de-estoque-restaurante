/* eslint-disable consistent-return */
import Input from '../../repositories/Input/Input';
import QuantityCheck from '../Input/QuantityCheck';

class InputConnectionController {
  async InputUpdate(inputSearchData, outputData) {
    const updatedQuantity = inputSearchData[0].dataValues.quantity - outputData.unities;
    const updatedTotalWeight = inputSearchData[0].dataValues.totalweight - outputData.weight;

    const updatedData = {
      quantity: updatedQuantity,
      totalweight: updatedTotalWeight,
    };

    const dataForQuantityCheck = [
      inputSearchData[0].dataValues.quantity,
      inputSearchData[0].dataValues.minimun_quantity,
      inputSearchData[0].dataValues.name,
    ];

    const check = await QuantityCheck.QuantityCheck(dataForQuantityCheck);

    if (check) {
      // eslint-disable-next-line default-case
      switch (check[0]) {
        case 'rate is near':
          await Input.Update(inputSearchData[0].dataValues.id, updatedData);
          return check;

        case 'limit reached':
          return check;
      }
    } else {
      return null;
    }

    await Input.Update(inputSearchData[0].dataValues.id, updatedData);
  }
}

export default new InputConnectionController();
