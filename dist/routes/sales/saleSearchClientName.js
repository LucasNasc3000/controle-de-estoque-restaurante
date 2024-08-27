"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SalesSearchClientData = require('../../controllers/Sales/SalesSearchClientData'); var _SalesSearchClientData2 = _interopRequireDefault(_SalesSearchClientData);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _salesPermission = require('../../middlewares/salesPermission'); var _salesPermission2 = _interopRequireDefault(_salesPermission);

const router = new (0, _express.Router)();

router.get('/:clientname', _loginRequired2.default, _salesPermission2.default, _SalesSearchClientData2.default.SearchByClientName);

exports. default = router;
