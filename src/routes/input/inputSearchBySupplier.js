import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/Input/InputSearchSimpleStrings';

const router = new Router();

router.get('/:supplier', inputSearchSimpleStrings.SearchBySupplier);

export default router;
