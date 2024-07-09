import { Router } from 'express';
import outputSearchIntegers from '../../controllers/Output/OutputSearchIntegers';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.get('/:id', loginRequired, outputsPermission, outputSearchIntegers.SearchByID);

export default router;
