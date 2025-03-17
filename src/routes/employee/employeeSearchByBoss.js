import { Router } from 'express';
import EmployeeSearchBoss from '../../controllers/Employee/EmployeeSearchBoss';
import adminPermission from '../../middlewares/adminPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:boss', loginRequired, adminPermission, EmployeeSearchBoss.SearchByBoss);
router.post('/', loginRequired, adminPermission, EmployeeSearchBoss.SearchByBossForList);

export default router;
