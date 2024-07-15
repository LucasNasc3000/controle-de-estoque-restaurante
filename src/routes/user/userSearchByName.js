import { Router } from 'express';
import UserSearchCredentials from '../../controllers/User/UserSearchCredentials';
import loginRequired from '../../middlewares/loginRequired';
import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.get('/:name', loginRequired, adminPermission, UserSearchCredentials.SearchByName);

export default router;
