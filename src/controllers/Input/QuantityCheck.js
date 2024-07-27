class QuantityCheck {
  async QuantityCheck(inputData) {
    try{
      const rate = inputData[0] - inputData[1];
      const warningAndData = [];

      if(inputData.minimun_quantity === null) return;

      if(rate <= 15 && rate > 0) {
        warningAndData.push('rate is near', inputData[2]);
        return warningAndData;
      } else if(rate <= 0) {
        warningAndData.push('limit reached', inputData[2]);
        return warningAndData;
      } else {
        return null;
      }
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new QuantityCheck();
