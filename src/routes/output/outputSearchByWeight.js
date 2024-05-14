import { Router } from 'express';
import outputSearchFloats from '../../controllers/Output/OutputSearchFloats'

const router = new Router();

router.get('/:weight', outputSearchFloats.SearchByWeight);

export default router;
