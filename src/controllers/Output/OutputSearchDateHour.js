import OutputSearchDateHour from "../../repositories/Output/OutputSearchDateHour";

class OutputSearchDateHourController {
  async SearchByDate(req, res) {
    const { date } = req.params;

    if(!date) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputDateFinder = await OutputSearchDateHour.SearchByDate(date);

    if(!outputDateFinder) {
      return res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(outputDateFinder);
  }

  async SearchByHour(req, res) {
    const { hour } = req.params;

    if(!hour) {
      return res.status(500).json({
        errors: ['ID não informado'],
      });
    }

    const outputHourFinder = await OutputSearchDateHour.SearchByHour(hour);

    if(!outputHourFinder) {
      return res.status(400).json({
          errors: ['ID não encontrado'],
      });
    }

    return res.json(outputHourFinder);
  }
}

export default new OutputSearchDateHourController();
