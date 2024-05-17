import Output from "../../models/Output";

class OutputSearchDateHourRepository {
  async SearchByDate(date) {
    try {
      const outputDateFinder = await Output.findAll({
        where: {
          date: date,
        },
        attributes: [
          'id',
          'date',
          'hour',
          'name',
          'type',
          'weight',
          'weightperunit',
          'unities',
          'created_at',
          'updated_at',
        ],
      });

      if (!outputDateFinder) {
        return null;
      }

      return outputDateFinder;
    } catch(e) {
      return console.log(e);
    }
  }

  async SearchByHour(hour) {
    try {
      const outputHourFinder = await Output.findAll({
        where: {
          hour: hour,
        },
        attributes: [
          'id',
          'date',
          'hour',
          'name',
          'type',
          'weight',
          'weightperunit',
          'unities',
          'created_at',
          'updated_at',
        ],
      });

      if (!outputHourFinder) {
        return null;
      }

      return outputHourFinder;
    } catch(e) {
      return console.log(e);
    }
  }
}

export default new OutputSearchDateHourRepository();