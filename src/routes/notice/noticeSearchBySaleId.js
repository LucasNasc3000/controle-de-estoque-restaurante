import { Router } from 'express';
import NoticeSearch from '../../controllers/Notice/NoticeSearch';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.get('/:saleid', loginRequired, salesPermission, NoticeSearch.SearchBySaleId);

export default router;
