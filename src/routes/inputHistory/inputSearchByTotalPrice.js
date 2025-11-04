import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/InputHistory/InputSearchFloats';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:totalprice', loginRequired, inputsPermission, inputSearchSimpleStrings.SearchByTotalPrice);

export default router;
