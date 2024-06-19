import { Router } from 'express';
import outputSearchIntegers from '../../controllers/Output/OutputSearchIntegers';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:unities', loginRequired, outputSearchIntegers.SearchByUnities);

export default router;
