import { Router } from 'express';
import inputSearchFloats from '../controllers/InputSearchFloats';

const router = new Router();

router.get('/:totalweight', inputSearchFloats.SearchByTotalWeight);

export default router;
