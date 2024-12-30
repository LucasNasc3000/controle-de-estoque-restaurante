import { Router } from 'express';
import Input from '../../controllers/Input/Input';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, inputsPermission, Input.Store);
router.put('/:id', loginRequired, inputsPermission, Input.Update);

export default router;
