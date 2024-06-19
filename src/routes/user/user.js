import { Router } from 'express';
import User from '../../controllers/User/User';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.post('/', User.store);
router.get('/', loginRequired, User.index);
router.put('/:id', loginRequired, User.update);
router.delete('/:id', loginRequired, User.delete);
router.delete('/', User.DeleteAll);

export default router;
