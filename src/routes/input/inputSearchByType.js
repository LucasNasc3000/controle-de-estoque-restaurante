import { Router } from 'express';
import inputSearchSimpleStrings from '../../controllers/Input/InputSearchSimpleStrings';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:type', loginRequired, inputSearchSimpleStrings.SearchByType);

export default router;
