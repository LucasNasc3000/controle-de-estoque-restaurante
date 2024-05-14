import { Router } from 'express';
import inputSearchFloats from '../controllers/InputSearchFloats';

const router = new Router();

router.get('/:weightperunit', inputSearchFloats.SearchByWeightPerUnit);

export default router;
