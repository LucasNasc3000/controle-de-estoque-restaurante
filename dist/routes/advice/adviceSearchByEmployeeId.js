"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AdviceSearch = require('../../controllers/Advice/AdviceSearch'); var _AdviceSearch2 = _interopRequireDefault(_AdviceSearch);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _salesPermission = require('../../middlewares/salesPermission'); var _salesPermission2 = _interopRequireDefault(_salesPermission);

const router = new (0, _express.Router)();

router.get('/:employeeid', _loginRequired2.default, _salesPermission2.default, _AdviceSearch2.default.SearchByEmployeeId);

exports. default = router;
