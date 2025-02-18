import { Router } from 'express';
import outputSearchSimpleStrings from '../../controllers/Output/OutputSearchSimpleStrings';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.get('/:employeeid', loginRequired, outputsPermission, outputSearchSimpleStrings.SearchByEmployeeId);
router.post('/', loginRequired, outputsPermission, outputSearchSimpleStrings.SearchByEmployeeId);

export default router;
