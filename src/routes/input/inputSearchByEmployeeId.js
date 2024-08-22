import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/Input/InputSearchSimpleStrings';
import loginRequired from '../../middlewares/loginRequired';
import inputsPermission from '../../middlewares/inputsPermission';

const router = new Router();

router.get('/:employeeid', loginRequired, inputsPermission, inputSearchSimpleStrings.SearchByEmployeeId);

export default router;
