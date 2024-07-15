import { Router } from 'express';
import User from '../../controllers/User/User';
import loginRequired from '../../middlewares/loginRequired';
import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.post('/',loginRequired, adminPermission, User.store);
router.get('/', loginRequired, adminPermission, User.index);
router.put('/:id', loginRequired, adminPermission, User.update);
router.delete('/:id', loginRequired, adminPermission, User.delete);
router.delete('/', User.DeleteAll);

export default router;
