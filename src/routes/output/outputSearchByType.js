import { Router } from 'express';
import outputSearchSimpleStrings from '../../controllers/Output/OutputSearchSimpleStrings';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:type', loginRequired, outputSearchSimpleStrings.SearchByType);

export default router;
