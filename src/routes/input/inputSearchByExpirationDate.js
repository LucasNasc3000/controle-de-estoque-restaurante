import { Router } from 'express';
import inputSearchDates from '../../controllers/Input/InputSearchDates';
import loginRequired from '../../middlewares/loginRequired';
import inputsPermission from '../../middlewares/inputsPermission';

const router = new Router();

router.get('/:expirationdate', loginRequired, inputsPermission, inputSearchDates.SearchByExpirationDate);

export default router;
