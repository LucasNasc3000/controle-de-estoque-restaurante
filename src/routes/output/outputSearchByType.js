import { Router } from 'express';
import outputSearchSimpleStrings from '../../controllers/Output/OutputSearchSimpleStrings';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.get('/:type', loginRequired, outputsPermission, outputSearchSimpleStrings.SearchByType);

export default router;
