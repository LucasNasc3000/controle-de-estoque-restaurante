import { Router } from 'express';
import SalesSearchSalesData from '../../controllers/Sales/SalesSearchSalesData';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.get('/:price', loginRequired, salesPermission, SalesSearchSalesData.SearchByPrice);

export default router;
