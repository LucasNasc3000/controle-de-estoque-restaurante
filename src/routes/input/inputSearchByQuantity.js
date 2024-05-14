import { Router } from 'express';
import inputSearchIntegers from '../controllers/InputSearchIntegers';

const router = new Router();

router.get('/:quantity', inputSearchIntegers.SearchByQuantity);

export default router;
