import { Router } from 'express';
import Output from '../../controllers/Output/Output';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.get('/', loginRequired, outputsPermission, Output.List);
router.post('/', loginRequired, outputsPermission, Output.Store);
router.put('/:id', loginRequired, outputsPermission, Output.Update);

export default router;
