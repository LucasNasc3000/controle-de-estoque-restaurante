import { Router } from 'express';
import outputSearchSimpleStrings from '../../controllers/Output/OutputSearchSimpleStrings'

const router = new Router();

router.get('/:type', outputSearchSimpleStrings.SearchByType);

export default router;
