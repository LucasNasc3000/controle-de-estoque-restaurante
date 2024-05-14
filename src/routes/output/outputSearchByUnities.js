import { Router } from 'express';
import outputSearchIntegers from '../../controllers/Output/OutputSearchIntegers'

const router = new Router();

router.get('/:unities', outputSearchIntegers.SearchByUnities);

export default router;
