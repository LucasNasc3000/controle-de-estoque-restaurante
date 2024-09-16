import { Router } from 'express';
import Employee from '../../controllers/Employee/Employee';
import loginRequired from '../../middlewares/loginRequired';
import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.post('/', Employee.Store);
router.get('/', loginRequired, adminPermission, Employee.Index);
router.put('/:id', loginRequired, adminPermission, Employee.Update);
router.delete('/:id', loginRequired, adminPermission, Employee.Delete);

export default router;
