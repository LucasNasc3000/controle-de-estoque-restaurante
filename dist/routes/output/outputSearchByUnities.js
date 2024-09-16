"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _OutputSearchIntegers = require('../../controllers/Output/OutputSearchIntegers'); var _OutputSearchIntegers2 = _interopRequireDefault(_OutputSearchIntegers);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _outputsPermission = require('../../middlewares/outputsPermission'); var _outputsPermission2 = _interopRequireDefault(_outputsPermission);

const router = new (0, _express.Router)();

router.get('/:unities', _loginRequired2.default, _outputsPermission2.default, _OutputSearchIntegers2.default.SearchByUnities);

exports. default = router;
