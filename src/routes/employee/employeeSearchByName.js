import { Router } from 'express';
import UserSearchCredentials from '../../controllers/Employee/EmployeeSearchCredentials';
import loginRequired from '../../middlewares/loginRequired';
import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.get('/:name', loginRequired, adminPermission, UserSearchCredentials.SearchByName);

export default router;
