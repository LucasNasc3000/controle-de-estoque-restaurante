import { Router } from 'express';
import UserSearchLogs from '../../controllers/User/UserSearchLogs';

const router = new Router();

router.get('/:logdate', UserSearchLogs.SearchByLogDate);

export default router;
