import { Router } from 'express';
import inputSearchFloats from '../../controllers/Input/InputSearchFloats';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/:weightperunit', loginRequired, inputSearchFloats.SearchByWeightPerUnit);

export default router;
