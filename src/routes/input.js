import { Router } from 'express';
import Input from '../controllers/Input';

const router = new Router();

router.post('/', Input.store);
router.get('/', Input.index);

export default router;
