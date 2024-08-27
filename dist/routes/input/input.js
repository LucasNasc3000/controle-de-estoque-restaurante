"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Input = require('../../controllers/Input/Input'); var _Input2 = _interopRequireDefault(_Input);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _inputsPermission = require('../../middlewares/inputsPermission'); var _inputsPermission2 = _interopRequireDefault(_inputsPermission);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _inputsPermission2.default, _Input2.default.Store);
router.get('/', _loginRequired2.default, _inputsPermission2.default, _Input2.default.Index);
router.put('/:id', _loginRequired2.default, _inputsPermission2.default, _Input2.default.Update);

exports. default = router;
