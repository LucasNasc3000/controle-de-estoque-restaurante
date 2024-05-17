import { Router } from 'express';
import UserSearchCredentials from '../../controllers/User/UserSearchCredentials';

const router = new Router();

router.get('/:name', UserSearchCredentials.SearchByName);

export default router;
