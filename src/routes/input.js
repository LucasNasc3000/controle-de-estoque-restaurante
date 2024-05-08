import { Router } from 'express';
import Input from '../controllers/Input';
import InputSearch from '../controllers/InputSearch';
// colocar os middlweares

const router = new Router();

router.post('/', Input.store);
router.get('/', Input.index);
router.get('/:id', InputSearch.SearchByID);
router.put('/:id', Input.update);
router.delete('/:id', Input.delete);

export default router;
