import { Router } from 'express';
import UserSearchCredentials from '../../controllers/User/UserSearchCredentials';

const router = new Router();

router.get('/:id', UserSearchCredentials.SearchByID);

export default router;
