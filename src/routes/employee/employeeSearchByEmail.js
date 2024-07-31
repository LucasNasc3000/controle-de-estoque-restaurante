import { Router } from 'express';
import UserSearchCredentials from '../../controllers/Employee/EmployeeSearchCredentials';
import loginRequired from '../../middlewares/loginRequired';
import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.get('/:email', loginRequired, adminPermission, UserSearchCredentials.SearchByEmail);

export default router;
