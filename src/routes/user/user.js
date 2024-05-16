import { Router } from 'express';
import User from '../../controllers/User/User';
// colocar os middlweares

const router = new Router();

router.post('/', User.store);
router.get('/', User.index);
router.put('/:id', User.update);
router.delete('/:id', User.delete);

export default router;
