import { Router } from 'express';
import Log from '../../controllers/Log/Log';

const router = new Router();

router.post('/', Log.store);

export default router;
