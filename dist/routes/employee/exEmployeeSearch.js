"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ExEmployeeSearch = require('../../controllers/Employee/ExEmployeeSearch'); var _ExEmployeeSearch2 = _interopRequireDefault(_ExEmployeeSearch);
var _adminPermission = require('../../middlewares/adminPermission'); var _adminPermission2 = _interopRequireDefault(_adminPermission);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _loginRequired2.default, _adminPermission2.default, _ExEmployeeSearch2.default.SearchExEmployees);

exports. default = router;
