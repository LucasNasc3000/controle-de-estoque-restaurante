import { Router } from 'express';
import inputSearchDates from '../../controllers/Input/InputSearchDates';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:entrydate', loginRequired, inputSearchDates.SearchByEntryDate);

export default router;
