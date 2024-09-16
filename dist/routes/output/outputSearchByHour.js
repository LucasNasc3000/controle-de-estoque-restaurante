"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _OutputSearchDateHour = require('../../controllers/Output/OutputSearchDateHour'); var _OutputSearchDateHour2 = _interopRequireDefault(_OutputSearchDateHour);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _outputsPermission = require('../../middlewares/outputsPermission'); var _outputsPermission2 = _interopRequireDefault(_outputsPermission);

const router = new (0, _express.Router)();

router.get('/:hour', _loginRequired2.default, _outputsPermission2.default, _OutputSearchDateHour2.default.SearchByHour);

exports. default = router;
