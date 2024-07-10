import { Router } from 'express';
import inputSearchIntegers from '../../controllers/Input/InputSearchIntegers';
import loginRequired from '../../middlewares/loginRequired';
import inputsPermission from '../../middlewares/inputsPermission';

const router = new Router();

router.get('/:id', loginRequired, inputsPermission, inputSearchIntegers.SearchByID);

export default router;
