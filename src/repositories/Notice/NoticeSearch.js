import Notice from '../../models/Notice';
import noticeAttributes from './Attributes';

class NoticeSearch {
  async SearchById(id) {
    const timerIdSearch = await Notice.findOne({
      where: {
        id,
      },
      attributes: noticeAttributes,
    });

    return timerIdSearch;
  }
}

export default new NoticeSearch();
