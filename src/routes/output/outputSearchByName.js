import { Router } from 'express';
import outputSearchSimpleStrings from '../../controllers/Output/OutputSearchSimpleStrings';
import loginRequired from '../../middlewares/loginRequired';
import outputsPermission from '../../middlewares/outputsPermission';

const router = new Router();

router.get('/:name', loginRequired, outputsPermission, outputSearchSimpleStrings.SearchByName);

export default router;
