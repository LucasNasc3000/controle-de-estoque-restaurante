import { Router } from 'express';
import Input from '../../controllers/Input/Input';
import loginRequired from '../../middlewares/loginRequired';
import inputsPermission from '../../middlewares/inputsPermission';

const router = new Router();

router.post('/', loginRequired, inputsPermission, Input.Store);
router.get('/', loginRequired, inputsPermission, Input.Index);
router.put('/:id', loginRequired, inputsPermission, Input.Update);

export default router;
