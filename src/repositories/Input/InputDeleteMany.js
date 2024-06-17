import Input from "../../models/Input";

export class InputDeleteMany {
  async DeleteMany(where, data) {
    switch(where) {
      case 'name':
        await Input.destroy({
          where: {
            name: data
          }
        })
        break;

      case 'type':
        await Input.destroy({
          where: {
            type: data
          }
        })
        break;

      case 'quantity':
        await Input.destroy({
          where: {
            quantity: data
          }
        })
        break;

      case 'totalweight':
        await Input.destroy({
          where: {
            totalweight: data
          }
        })
        break;

      case 'weightperunit':
        await Input.destroy({
          where: {
            weightperunit: data
          }
        })
        break;

      case 'supplier':
        await Input.destroy({
          where: {
            supplier: data
          }
        })
        break;

      case 'expirationdate':
        await Input.destroy({
          where: {
            expirationdate: data
          }
        })
        break;

      case 'entrydate':
        await Input.destroy({
          where: {
            entrydate: data
          }
        })
        break;
    }
  }
}

export default new InputDeleteMany();
