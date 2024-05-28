import User from "../../models/User";

class UsersList {
  async List() {
    try {
      const users = await User.findAll({
        attributes: [
          'id',
          'name',
          'email',
          'password_hash',
          'created_at',
          'updated_at'
        ],
        order: [['id', 'DESC']],
      });

      if(users === '') return null;

      return users;
    } catch (e) {
      return console.log(e);
    }
  }

  async Store(data) {
    try {
      const newUser = await User.create(data);

      if(!newUser) return null;

      return newUser;
    } catch(e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  async Update(id, data) {
    try {
      const findUser = await User.findByPk(id);

      if (!findUser) {
        return null;
      }

      const userUpdate = await findUser.update(data);
      return userUpdate;
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  async Delete(id) {
    try {

      const deleteUser = await User.findByPk(id);

      if (!deleteUser) {
        return null;
      }

      await deleteUser.destroy();
    } catch (e) {
      // mudar o retorno para null ao terminar
      return console.log(e);
    }
  }

  // Para ser usado apenas no desenvolvimento
  async Truncate() {
    try {
      await User.truncate();
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default new UsersList();
