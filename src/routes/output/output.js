import { Router } from 'express';
import Output from '../../controllers/Output/Output';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.post('/', loginRequired, outputsPermission, Output.store);
router.get('/', loginRequired, outputsPermission, Output.index);
router.put('/:id', loginRequired, outputsPermission, Output.update);

export default router;
