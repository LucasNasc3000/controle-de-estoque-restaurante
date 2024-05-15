import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/Input/InputSearchSimpleStrings';

const router = new Router();

router.get('/:name', inputSearchSimpleStrings.SearchByName);

export default router;
