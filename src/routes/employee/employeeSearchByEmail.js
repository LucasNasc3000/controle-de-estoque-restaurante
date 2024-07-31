import { Router } from 'express';
import EmployeeSearchCredentials from '../../controllers/Employee/EmployeeSearchCredentials';
import loginRequired from '../../middlewares/loginRequired';
import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.get('/:email', loginRequired, adminPermission, EmployeeSearchCredentials.SearchByEmail);

export default router;
