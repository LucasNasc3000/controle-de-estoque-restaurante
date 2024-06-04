import Input from "../../repositories/Input/Input";

class InputConnectionController{
  async InputUpdate(inputSearchData, outputData) {
    const updatedQuantity = inputSearchData[0].dataValues.quantity - outputData.unities;
    const updatedTotalWeight = inputSearchData[0].dataValues.totalweight - outputData.weight;

    const updatedData = {
      quantity: updatedQuantity,
      totalweight: updatedTotalWeight
    };

    await Input.Update(inputSearchData[0].dataValues.id, updatedData);
  }
}

export default new InputConnectionController();
