import { Router } from 'express';
import EmployeeSearchCredentials from '../../controllers/Employee/EmployeeSearchCredentials';
import loginRequired from '../../middlewares/loginRequired';
import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.get('/:name', loginRequired, adminPermission, EmployeeSearchCredentials.SearchByName);

export default router;
