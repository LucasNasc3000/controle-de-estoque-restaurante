import { Router } from 'express';
import outputSearchDateHour from '../../controllers/Output/OutputSearchDateHour';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.get('/:date', loginRequired, outputsPermission, outputSearchDateHour.SearchByDate);

export default router;
