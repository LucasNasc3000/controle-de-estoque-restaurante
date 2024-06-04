import { Router } from 'express';
import Output from '../../controllers/Output/Output';
// colocar os middlweares

const router = new Router();

router.post('/', Output.store);
router.get('/', Output.index);
router.put('/:id', Output.update);
router.delete('/:id', Output.delete);
router.delete('/', Output.DeleteAll);

export default router;
