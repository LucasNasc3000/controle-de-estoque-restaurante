import { Op } from "sequelize";
import User from "../../models/User";

class UsersSearchCredentials {
  async SearchById(id) {
    try {
      const userFinder = await User.findAll({
        where: {
          id: { [Op.like]: `%${id}%` },
        },
        attributes: [
          'id',
          'name',
          'email',
          'password_hash',
          'permission',
          'created_at',
          'updated_at'
        ],
      });

      if (userFinder.length <= 0) return null;

      return userFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const userFinderByName = await User.findAll({
        where: {
          name: { [Op.like]: `%${name}%` },
        },
        attributes: [
          'id',
          'name',
          'email',
          'password_hash',
          'permission',
          'created_at',
          'updated_at'
        ],
      });

      if (!userFinderByName) {
        return null;
      }

      return userFinderByName;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByEmail(email) {
    try {
      const userFinderByEmail = await User.findAll({
        where: {
          email: { [Op.like]: `%${email}%` },
        },
        attributes: [
          'id',
          'name',
          'email',
          'password_hash',
          'permission',
          'created_at',
          'updated_at'
        ],
      });

      if (!userFinderByEmail) {
        return null;
      }

      return userFinderByEmail;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new UsersSearchCredentials();
