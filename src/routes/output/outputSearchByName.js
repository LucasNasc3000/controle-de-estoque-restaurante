import { Router } from 'express';
import outputSearchSimpleStrings from '../../controllers/Output/OutputSearchSimpleStrings'

const router = new Router();

router.get('/:name', outputSearchSimpleStrings.SearchByName);

export default router;
