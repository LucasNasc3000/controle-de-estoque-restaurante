import Notice from '../../models/Notice';
import noticeAttributes from './Attributes';

class NoticeSearch {
  async SearchByTimerId(timerId) {
    const timerIdSearch = await Notice.findOne({
      where: {
        timerId,
      },
      attributes: noticeAttributes,
    });

    return timerIdSearch;
  }
}

export default new NoticeSearch();
