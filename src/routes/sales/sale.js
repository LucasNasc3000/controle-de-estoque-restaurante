import { Router } from 'express';
import Sales from '../../controllers/Sales/Sales';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.post('/', loginRequired, salesPermission, Sales.Store);
router.patch('/:id', loginRequired, salesPermission, Sales.Update);

export default router;
