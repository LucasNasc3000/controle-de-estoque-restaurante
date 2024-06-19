import { Router } from 'express';
import outputSearchDateHour from '../../controllers/Output/OutputSearchDateHour';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:date', loginRequired, outputSearchDateHour.SearchByDate);

export default router;
