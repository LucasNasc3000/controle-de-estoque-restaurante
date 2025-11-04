import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/InputHistory/InputSearchSimpleStrings';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:supplier', loginRequired, inputsPermission, inputSearchSimpleStrings.SearchBySupplier);

export default router;
