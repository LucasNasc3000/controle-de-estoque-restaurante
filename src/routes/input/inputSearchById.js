import { Router } from 'express';
import inputSearchIntegers from '../../controllers/Input/InputSearchIntegers';

const router = new Router();

router.get('/:id', inputSearchIntegers.SearchByID);

export default router;
