import { Router } from 'express';
import SalesSearchClientData from '../../controllers/Sales/SalesSearchClientData';
import loginRequired from '../../middlewares/loginRequired';
import salesPermission from '../../middlewares/salesPermission';

const router = new Router();

router.get('/:phonenumber', loginRequired, salesPermission, SalesSearchClientData.SearchByPhoneNumber);

export default router;
