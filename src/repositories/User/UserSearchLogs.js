import User from "../../models/User";

class UsersSearchLogs {
  async SearchByLogHour(loghour) {
    try {
      const userFinderByLogHour = await User.findAll({
        where: {
          loghour: loghour,
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

      if (!userFinderByLogHour) {
        return null;
      }

      return userFinderByLogHour;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByLogDate(logdate) {
    try {
      const userFinderByLogDate = await User.findAll({
        where: {
          logdate: logdate,
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

      if (!userFinderByLogDate) {
        return null;
      }

      return userFinderByLogDate;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new UsersSearchLogs();
