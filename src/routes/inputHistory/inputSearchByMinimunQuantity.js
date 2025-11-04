import { Router } from 'express';
import inputSearchIntegers from '../../controllers/InputHistory/InputSearchIntegers';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:minimunquantity', loginRequired, inputsPermission, inputSearchIntegers.SearchByMinimunQuantity);

export default router;
