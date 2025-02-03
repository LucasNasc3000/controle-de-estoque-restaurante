import { Router } from 'express';
import AdviceSearch from '../../controllers/Advice/AdviceSearch';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.get('/:saleid', loginRequired, salesPermission, AdviceSearch.SearchBySaleId);

export default router;
