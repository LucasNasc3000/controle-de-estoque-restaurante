import { Router } from 'express';
import Sales from '../../controllers/Sales/Sales';
import loginRequired from '../../middlewares/loginRequired';
import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.post('/', loginRequired, adminPermission, Sales.store);
router.get('/', loginRequired, adminPermission, Sales.index);
router.put('/:id', loginRequired, adminPermission, Sales.update);
router.delete('/:id', loginRequired, adminPermission, Sales.delete);
router.delete('/', Sales.DeleteAll);

export default router;
