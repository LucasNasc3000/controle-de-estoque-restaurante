import User from "../../models/User";

class UsersSearchCredentials {
  async SearchById(id) {
    try {
      const userFinderById = await User.findAll({
        where: {
          id: id,
        },
        attributes: [
          'id',
          'name',
          'email',
          'password_hash',
          'logdate',
          'loghour',
          'created_at',
          'updated_at'
        ],
      });

      if (!userFinderById) {
        return null;
      }

      return userFinderById;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByName(name) {
    try {
      const userFinderByName = await User.findAll({
        where: {
          name: name,
        },
        attributes: [
          'id',
          'name',
          'email',
          'password_hash',
          'logdate',
          'loghour',
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
          email: email,
        },
        attributes: [
          'id',
          'name',
          'email',
          'password_hash',
          'logdate',
          'loghour',
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
