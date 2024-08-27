"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Output = require('../../controllers/Output/Output'); var _Output2 = _interopRequireDefault(_Output);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _outputsPermission = require('../../middlewares/outputsPermission'); var _outputsPermission2 = _interopRequireDefault(_outputsPermission);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _outputsPermission2.default, _Output2.default.Store);
router.get('/', _loginRequired2.default, _outputsPermission2.default, _Output2.default.Index);
router.put('/:id', _loginRequired2.default, _outputsPermission2.default, _Output2.default.Update);

exports. default = router;
