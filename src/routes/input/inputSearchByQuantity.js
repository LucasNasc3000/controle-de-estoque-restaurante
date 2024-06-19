import { Router } from 'express';
import inputSearchIntegers from '../../controllers/Input/InputSearchIntegers';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:quantity', loginRequired, inputSearchIntegers.SearchByQuantity);

export default router;
