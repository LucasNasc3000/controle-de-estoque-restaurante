import { Router } from 'express';
import Employee from '../../controllers/Employee/Employee';
import loginRequired from '../../middlewares/loginRequired';
import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.post('/', loginRequired, adminPermission, Employee.store);
router.get('/', loginRequired, adminPermission, Employee.index);
router.put('/:id', loginRequired, adminPermission, Employee.update);
router.delete('/:id', loginRequired, adminPermission, Employee.delete);

export default router;
