import { Router } from 'express';
import Output from '../../controllers/Output/Output';
import loginRequired from '../../middlewares/loginRequired';
import outputs_crs from '../../middlewares/outputs_crs';

const router = new Router();

router.post('/', loginRequired, Output.store);
router.get('/', loginRequired, outputs_crs, Output.index);
router.put('/:id', loginRequired, Output.update);
router.delete('/:id', loginRequired, Output.delete);
router.delete('/', Output.DeleteAll);

export default router;
