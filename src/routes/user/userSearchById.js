import { Router } from 'express';
import UserSearchCredentials from '../../controllers/User/UserSearchCredentials';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:id', loginRequired, UserSearchCredentials.SearchByID);

export default router;
