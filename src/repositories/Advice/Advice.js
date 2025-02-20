import Advice from '../../models/Advice';

class AdviceList {
  async Store(data) {
    const newAdvice = await Advice.create(data);
    return newAdvice;
  }

  async Update(id, data) {
    const findAdvice = await Advice.findByPk(id);

    const adviceUpdate = await findAdvice.update(data);

    return adviceUpdate;
  }

  async Delete(id) {
    const findAdvice = await Advice.findByPk(id);

    if (!findAdvice) return 'Lembrete não encontrado';

    const adviceDelete = await findAdvice.destroy();

    return adviceDelete;
  }
}

export default new AdviceList();
