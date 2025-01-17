import { Router } from 'express';
import ExEmployeeSearch from '../../controllers/Employee/ExEmployeeSearch';
import adminPermission from '../../middlewares/adminPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, adminPermission, ExEmployeeSearch.SearchExEmployees);

export default router;
