import { Router } from 'express';
import UserSearchCredentials from '../../controllers/User/UserSearchCredentials';

const router = new Router();

router.get('/:email', UserSearchCredentials.SearchByEmail);

export default router;
