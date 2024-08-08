import { Router } from 'express';
import Sales from '../../controllers/Sales/Sales';
import loginRequired from '../../middlewares/loginRequired';
// import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.post('/', loginRequired, Sales.store);
router.get('/', loginRequired, Sales.index);
router.patch('/:id', loginRequired, Sales.update);
router.put('/:id', loginRequired, Sales.update);

export default router;
