import { Router } from 'express';
import inputSearchSimpleStrings from '../controllers/InputSearchSimpleStrings';

const router = new Router();

router.get('/:supplier', inputSearchSimpleStrings.SearchBySupplier);

export default router;
