"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _InputSearchFloats = require('../../controllers/Input/InputSearchFloats'); var _InputSearchFloats2 = _interopRequireDefault(_InputSearchFloats);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _inputsPermission = require('../../middlewares/inputsPermission'); var _inputsPermission2 = _interopRequireDefault(_inputsPermission);

const router = new (0, _express.Router)();

router.get('/:weightperunit', _loginRequired2.default, _inputsPermission2.default, _InputSearchFloats2.default.SearchByWeightPerUnit);

exports. default = router;
