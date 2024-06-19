import { Router } from 'express';
import inputSearchDates from '../../controllers/Input/InputSearchDates';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:expirationdate', loginRequired, inputSearchDates.SearchByExpirationDate);

export default router;
