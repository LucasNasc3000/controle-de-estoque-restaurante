import { Router } from 'express';
import Notice from '../../controllers/Notice/Notice';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.post('/', loginRequired, salesPermission, Notice.Store);
router.put('/:id', loginRequired, salesPermission, Notice.Update);

export default router;
