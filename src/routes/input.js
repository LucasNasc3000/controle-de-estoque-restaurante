import { Router } from 'express';
import Input from '../controllers/Input';
// colocar os middlweares

const router = new Router();

router.post('/', Input.store);
router.get('/', Input.index);
router.put('/:id', Input.update);
router.delete('/:id', Input.delete);

export default router;
