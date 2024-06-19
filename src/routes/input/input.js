import { Router } from 'express';
import Input from '../../controllers/Input/Input';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, Input.store);
router.get('/', loginRequired, Input.index);
router.put('/:id', loginRequired, Input.update);
router.delete('/:id', loginRequired, Input.delete);
router.delete('/', loginRequired, Input.DeleteAll);

export default router;
