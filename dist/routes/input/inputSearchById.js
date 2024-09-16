"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _InputSearchIntegers = require('../../controllers/Input/InputSearchIntegers'); var _InputSearchIntegers2 = _interopRequireDefault(_InputSearchIntegers);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _inputsPermission = require('../../middlewares/inputsPermission'); var _inputsPermission2 = _interopRequireDefault(_inputsPermission);

const router = new (0, _express.Router)();

router.get('/:id', _loginRequired2.default, _inputsPermission2.default, _InputSearchIntegers2.default.SearchByID);

exports. default = router;
