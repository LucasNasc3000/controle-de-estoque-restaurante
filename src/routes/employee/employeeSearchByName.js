import { Router } from 'express';
import EmployeeSearchCredentials from '../../controllers/Employee/EmployeeSearchCredentials';
import adminPermission from '../../middlewares/adminPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:name', loginRequired, adminPermission, EmployeeSearchCredentials.SearchByName);

export default router;
