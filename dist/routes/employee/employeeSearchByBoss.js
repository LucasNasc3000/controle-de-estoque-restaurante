"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _EmployeeSearchBoss = require('../../controllers/Employee/EmployeeSearchBoss'); var _EmployeeSearchBoss2 = _interopRequireDefault(_EmployeeSearchBoss);
var _adminPermission = require('../../middlewares/adminPermission'); var _adminPermission2 = _interopRequireDefault(_adminPermission);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/:boss', _loginRequired2.default, _adminPermission2.default, _EmployeeSearchBoss2.default.SearchByBoss);
router.post('/', _loginRequired2.default, _adminPermission2.default, _EmployeeSearchBoss2.default.SearchByBossForListItems);

exports. default = router;
