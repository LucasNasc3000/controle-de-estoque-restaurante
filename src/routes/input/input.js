import { Router } from 'express';
import Input from '../../controllers/Input/Input';
// colocar os middlweares

const router = new Router();

router.post('/', Input.store);
router.get('/', Input.index);
router.put('/:id', Input.update);
router.delete('/:id', Input.delete);
router.delete('/', Input.DeleteAll);

export default router;
