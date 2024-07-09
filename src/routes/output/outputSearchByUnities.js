import { Router } from 'express';
import outputSearchIntegers from '../../controllers/Output/OutputSearchIntegers';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.get('/:unities', loginRequired, outputsPermission, outputSearchIntegers.SearchByUnities);

export default router;
