import { Router } from 'express';
import inputSearchSimpleStrings from '../controllers/InputSearchSimpleStrings';

const router = new Router();

router.get('/:type', inputSearchSimpleStrings.SearchByType);

export default router;
