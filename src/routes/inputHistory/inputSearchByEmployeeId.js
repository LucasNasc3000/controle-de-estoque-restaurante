import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/InputHistory/InputSearchSimpleStrings';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:employeeid', loginRequired, inputsPermission, inputSearchSimpleStrings.SearchByEmployeeId);
router.post('/', loginRequired, inputsPermission, inputSearchSimpleStrings.SearchByEmployeeId);

export default router;
