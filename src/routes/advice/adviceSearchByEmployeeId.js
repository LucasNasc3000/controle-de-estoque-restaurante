import { Router } from 'express';
import AdviceSearch from '../../controllers/Advice/AdviceSearch';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.get('/:employeeid', loginRequired, salesPermission, AdviceSearch.SearchByEmployeeId);

export default router;
