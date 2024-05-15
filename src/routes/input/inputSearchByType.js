import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/Input/InputSearchSimpleStrings';

const router = new Router();

router.get('/:type', inputSearchSimpleStrings.SearchByType);

export default router;
