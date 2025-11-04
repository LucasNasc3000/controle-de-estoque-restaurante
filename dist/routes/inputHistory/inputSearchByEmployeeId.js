"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _InputSearchSimpleStrings = require('../../controllers/InputHistory/InputSearchSimpleStrings'); var _InputSearchSimpleStrings2 = _interopRequireDefault(_InputSearchSimpleStrings);
var _inputsPermission = require('../../middlewares/inputsPermission'); var _inputsPermission2 = _interopRequireDefault(_inputsPermission);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/:employeeid', _loginRequired2.default, _inputsPermission2.default, _InputSearchSimpleStrings2.default.SearchByEmployeeId);
router.post('/', _loginRequired2.default, _inputsPermission2.default, _InputSearchSimpleStrings2.default.SearchByEmployeeId);

exports. default = router;
