import { Router } from 'express';
import SalesSearchSalesData from '../../controllers/Sales/SalesSearchSalesData';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.get('/:date', loginRequired, salesPermission, SalesSearchSalesData.SearchByDate);
router.post('/', loginRequired, salesPermission, SalesSearchSalesData.SearchByDateDashboard);

export default router;
