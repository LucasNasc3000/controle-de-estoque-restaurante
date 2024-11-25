/* eslint-disable consistent-return */
import Input from '../../repositories/Input/Input';
import QuantityCheck from '../Input/QuantityCheck';

class InputConnectionController {
  async InputUpdate(inputSearchData, outputData) {
    const updatedQuantity = inputSearchData.dataValues.quantity - outputData.unities;

    const updatedData = {
      quantity: updatedQuantity,
    };

    const dataForQuantityCheck = [
      inputSearchData.dataValues.quantity,
      inputSearchData.dataValues.minimun_quantity,
      inputSearchData.dataValues.name,
      inputSearchData.dataValues.rateisnear,
      updatedData.quantity,
    ];

    const check = await QuantityCheck.QuantityCheck(dataForQuantityCheck);

    if (check) {
      // eslint-disable-next-line default-case
      switch (check[0]) {
        case 'rate is near':
          await Input.Update(inputSearchData.dataValues.id, updatedData);
          return check;

        case 'limit reached':
          return check;
      }

      if (check === 'no destinataries') return 'no destinataries';
    }

    await Input.Update(inputSearchData.dataValues.id, updatedData);
  }
}

export default new InputConnectionController();
