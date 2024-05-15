import { Router } from 'express';
import inputSearchDates from '../../controllers/Input/InputSearchDates';

const router = new Router();

router.get('/:entrydate', inputSearchDates.SearchByEntryDate);

export default router;
