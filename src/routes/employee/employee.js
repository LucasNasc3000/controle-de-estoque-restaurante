import { Router } from 'express';
import Employee from '../../controllers/Employee/Employee';
import adminPermission from '../../middlewares/adminPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.post('/', Employee.Store);
router.put('/:id', loginRequired, adminPermission, Employee.Update);

export default router;
