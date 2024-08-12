import { Router } from 'express';
import Sales from '../../controllers/Sales/Sales';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.post('/', loginRequired, salesPermission, Sales.store);
router.get('/', loginRequired, salesPermission, Sales.index);
router.patch('/:id', loginRequired, salesPermission, Sales.update);

export default router;
