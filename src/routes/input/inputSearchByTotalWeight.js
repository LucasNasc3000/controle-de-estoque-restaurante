import { Router } from 'express';
import inputSearchFloats from '../../controllers/Input/InputSearchFloats';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:totalweight', loginRequired, inputSearchFloats.SearchByTotalWeight);

export default router;
