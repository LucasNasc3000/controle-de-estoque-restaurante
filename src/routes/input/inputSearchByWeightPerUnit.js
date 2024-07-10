import { Router } from 'express';
import inputSearchFloats from '../../controllers/Input/InputSearchFloats';
import loginRequired from '../../middlewares/loginRequired';
import inputsPermission from '../../middlewares/inputsPermission';

const router = new Router();

router.get('/:weightperunit', loginRequired, inputsPermission, inputSearchFloats.SearchByWeightPerUnit);

export default router;
