import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/Input/InputSearchSimpleStrings';
import loginRequired from '../../middlewares/loginRequired';
import inputsPermission from '../../middlewares/inputsPermission';

const router = new Router();

router.get('/:type', loginRequired, inputsPermission, inputSearchSimpleStrings.SearchByType);

export default router;
