import { Router } from 'express';
import outputSearchIntegers from '../../controllers/Output/OutputSearchIntegers'

const router = new Router();

router.get('/:id', outputSearchIntegers.SearchByID);

export default router;
