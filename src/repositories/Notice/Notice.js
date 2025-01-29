import Notice from '../../models/Notice';

class NoticeList {
  async Store(data) {
    const newNotice = await Notice.create(data);
    return newNotice;
  }

  async Update(id, data) {
    const findNotice = await Notice.findByPk(id);

    if (!findNotice) return 'Lembrete não encontrado';

    const noticeUpdate = await findNotice.update(data);

    return noticeUpdate;
  }

  async Delete(id) {
    const findNotice = await Notice.findByPk(id);

    if (!findNotice) return 'Lembrete não encontrado';

    await findNotice.destroy();

    return 'deletado';
  }
}

export default new NoticeList();
