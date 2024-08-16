import { Router } from 'express';
import Output from '../../controllers/Output/Output';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.post('/', loginRequired, outputsPermission, Output.Store);
router.get('/', loginRequired, outputsPermission, Output.Index);
router.put('/:id', loginRequired, outputsPermission, Output.Update);

export default router;
