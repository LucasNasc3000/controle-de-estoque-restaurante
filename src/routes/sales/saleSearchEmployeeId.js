import { Router } from 'express';
import SalesSearchSalesData from '../../controllers/Sales/SalesSearchSalesData';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.get('/:employeeid', loginRequired, salesPermission, SalesSearchSalesData.SearchByEmployeeId);
router.post('/', loginRequired, salesPermission, SalesSearchSalesData.SearchByEmployeeId);

export default router;
