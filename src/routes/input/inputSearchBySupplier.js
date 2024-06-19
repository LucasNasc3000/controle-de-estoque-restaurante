import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/Input/InputSearchSimpleStrings';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:supplier', loginRequired, inputSearchSimpleStrings.SearchBySupplier);

export default router;
