import { Router } from 'express';
import SalesSearchSalesData from '../../controllers/Sales/SalesSearchSalesData';
import loginRequired from '../../middlewares/loginRequired';
// import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.get('/:date', loginRequired, SalesSearchSalesData.SearchByDate);

export default router;
