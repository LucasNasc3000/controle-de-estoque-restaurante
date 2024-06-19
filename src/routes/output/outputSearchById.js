import { Router } from 'express';
import outputSearchIntegers from '../../controllers/Output/OutputSearchIntegers';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:id', loginRequired, outputSearchIntegers.SearchByID);

export default router;
