import { Router } from 'express';
import inputSearchSimpleStrings from '../controllers/InputSearchSimpleStrings';

const router = new Router();

router.get('/:name', inputSearchSimpleStrings.SearchByName);

export default router;
