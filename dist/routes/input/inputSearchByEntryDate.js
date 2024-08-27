"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _InputSearchDates = require('../../controllers/Input/InputSearchDates'); var _InputSearchDates2 = _interopRequireDefault(_InputSearchDates);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _inputsPermission = require('../../middlewares/inputsPermission'); var _inputsPermission2 = _interopRequireDefault(_inputsPermission);

const router = new (0, _express.Router)();

router.get('/:entrydate', _loginRequired2.default, _inputsPermission2.default, _InputSearchDates2.default.SearchByEntryDate);

exports. default = router;
