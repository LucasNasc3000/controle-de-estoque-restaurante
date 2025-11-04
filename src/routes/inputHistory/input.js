import { Router } from 'express';
import Input from '../../controllers/InputHistory/Input';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, inputsPermission, Input.Store);

export default router;
