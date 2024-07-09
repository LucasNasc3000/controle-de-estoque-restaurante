import { Router } from 'express';
import outputSearchFloats from '../../controllers/Output/OutputSearchFloats';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.get('/:weight', loginRequired, outputsPermission, outputSearchFloats.SearchByWeight);

export default router;
