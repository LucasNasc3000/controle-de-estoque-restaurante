import { Router } from 'express';
import inputSearchFloats from '../../controllers/InputHistory/InputSearchFloats';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:totalweightPerRegister', loginRequired, inputsPermission, inputSearchFloats.SearchByTotalWeightPerRegister);

export default router;
