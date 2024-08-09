import { Router } from 'express';
import Input from '../../controllers/Input/Input';
import loginRequired from '../../middlewares/loginRequired';
import inputsPermission from '../../middlewares/inputsPermission';

const router = new Router();

router.post('/', loginRequired, inputsPermission, Input.store);
router.get('/', loginRequired, inputsPermission, Input.index);
router.put('/:id', loginRequired, inputsPermission, Input.update);

export default router;
