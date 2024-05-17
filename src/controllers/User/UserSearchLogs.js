import UserSearchLogs from "../../repositories/User/UserSearchLogs";

class UsersSearchCredentialsController {
  async SearchByLogHour(req, res) {
    const { loghour } = req.params;

    if(!loghour) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userLogHourFinder = await UserSearchLogs.SearchByLogHour(loghour);

    if(!userLogHourFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(userLogHourFinder);
  }

  async SearchByLogDate(req, res) {
    const { logdate } = req.params;

    if(!logdate) {
      res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const userLogDateFinder = await UserSearchLogs.SearchByLogDate(logdate);

    if(!userLogDateFinder) {
      res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(userLogDateFinder);
  }
}

export default new UsersSearchCredentialsController();
