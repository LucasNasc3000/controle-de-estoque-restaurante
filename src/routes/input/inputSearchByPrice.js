import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/Input/InputSearchFloats';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:price', loginRequired, inputsPermission, inputSearchSimpleStrings.SearchByPrice);

export default router;
