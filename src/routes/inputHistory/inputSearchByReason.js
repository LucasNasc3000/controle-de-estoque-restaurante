import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/InputHistory/InputSearchSimpleStrings';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:reason', loginRequired, inputsPermission, inputSearchSimpleStrings.SearchByReason);

export default router;
