import { Router } from 'express';
import outputSearchDateHour from '../../controllers/Output/OutputSearchDateHour'

const router = new Router();

router.get('/:hour', outputSearchDateHour.SearchByHour);

export default router;
