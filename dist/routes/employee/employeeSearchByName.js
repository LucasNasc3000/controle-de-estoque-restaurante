"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _EmployeeSearchCredentials = require('../../controllers/Employee/EmployeeSearchCredentials'); var _EmployeeSearchCredentials2 = _interopRequireDefault(_EmployeeSearchCredentials);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _adminPermission = require('../../middlewares/adminPermission'); var _adminPermission2 = _interopRequireDefault(_adminPermission);

const router = new (0, _express.Router)();

router.get('/:name', _loginRequired2.default, _adminPermission2.default, _EmployeeSearchCredentials2.default.SearchByName);

exports. default = router;
