import { Router } from 'express';
import inputSearchDates from '../controllers/InputSearchDates';

const router = new Router();

router.get('/:expirationdate', inputSearchDates.SearchByExpirationDate);

export default router;
