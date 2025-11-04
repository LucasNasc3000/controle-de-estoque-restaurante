import { Router } from 'express';
import inputSearchDates from '../../controllers/InputHistory/InputSearchDates';
import inputsPermission from '../../middlewares/inputsPermission';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:expirationdate', loginRequired, inputsPermission, inputSearchDates.SearchByExpirationDate);

export default router;
