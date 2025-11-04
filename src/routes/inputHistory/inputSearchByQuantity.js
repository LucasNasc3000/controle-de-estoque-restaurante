import { Router } from 'express';
import inputSearchIntegers from '../../controllers/InputHistory/InputSearchIntegers';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:quantity', loginRequired, inputsPermission, inputSearchIntegers.SearchByQuantity);

export default router;
