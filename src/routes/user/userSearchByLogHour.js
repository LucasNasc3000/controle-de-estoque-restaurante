import { Router } from 'express';
import UserSearchLogs from '../../controllers/User/UserSearchLogs';

const router = new Router();

router.get('/:loghour', UserSearchLogs.SearchByLogHour);

export default router;
