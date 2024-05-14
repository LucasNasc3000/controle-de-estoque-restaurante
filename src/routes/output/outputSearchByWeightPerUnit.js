import { Router } from 'express';
import outputSearchFloats from '../../controllers/Output/OutputSearchFloats'

const router = new Router();

router.get('/:weightperunit', outputSearchFloats.SearchByWeightPerUnit);

export default router;
