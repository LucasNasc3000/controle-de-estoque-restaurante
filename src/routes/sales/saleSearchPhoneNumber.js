import { Router } from 'express';
import SalesSearchClientData from '../../controllers/Sales/SalesSearchClientData';
import loginRequired from '../../middlewares/loginRequired';
// import adminPermission from '../../middlewares/adminPermission';

const router = new Router();

router.get('/:phonenumber', loginRequired, SalesSearchClientData.SearchByPhoneNumber);

export default router;
