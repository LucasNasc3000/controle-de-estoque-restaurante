import { Router } from 'express';
import inputSearchIntegers from '../../controllers/Input/InputSearchIntegers';
import loginRequired from '../../middlewares/loginRequired';
import inputsPermission from '../../middlewares/inputsPermission';

const router = new Router();

router.get('/:minimunquantity', loginRequired, inputsPermission, inputSearchIntegers.SearchByMinimunQuantity);

export default router;
