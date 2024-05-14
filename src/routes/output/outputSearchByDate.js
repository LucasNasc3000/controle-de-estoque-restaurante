import { Router } from 'express';
import outputSearchDateHour from '../../controllers/Output/OutputSearchDateHour'

const router = new Router();

router.get('/:date', outputSearchDateHour.SearchByDate);

export default router;
