import { Router } from 'express';
import outputSearchFloats from '../../controllers/Output/OutputSearchFloats';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:weight', loginRequired, outputSearchFloats.SearchByWeight);

export default router;
