import { Router } from 'express';
import Advice from '../../controllers/Advice/Advice';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.get('/', loginRequired, salesPermission, Advice.Recovery);
router.post('/', loginRequired, salesPermission, Advice.Store);
router.patch('/:id', loginRequired, salesPermission, Advice.Update);
router.delete('/:id', loginRequired, salesPermission, Advice.Delete);

export default router;
