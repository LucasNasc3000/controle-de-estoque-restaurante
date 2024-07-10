import { Router } from 'express';
import inputSearchFloats from '../../controllers/Input/InputSearchFloats';
import loginRequired from '../../middlewares/loginRequired';
import inputsPermission from '../../middlewares/inputsPermission';

const router = new Router();

router.get('/:totalweight', loginRequired, inputsPermission, inputSearchFloats.SearchByTotalWeight);

export default router;
