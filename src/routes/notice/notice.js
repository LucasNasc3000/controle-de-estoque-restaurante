import { Router } from 'express';
import Notice from '../../controllers/Notice/Notice';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.post('/', loginRequired, salesPermission, Notice.Store);
router.patch('/:id', loginRequired, salesPermission, Notice.Update);
router.delete('/:id', loginRequired, salesPermission, Notice.Delete);

export default router;
