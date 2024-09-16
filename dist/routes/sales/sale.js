"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Sales = require('../../controllers/Sales/Sales'); var _Sales2 = _interopRequireDefault(_Sales);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _salesPermission = require('../../middlewares/salesPermission'); var _salesPermission2 = _interopRequireDefault(_salesPermission);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _salesPermission2.default, _Sales2.default.Store);
router.get('/', _loginRequired2.default, _salesPermission2.default, _Sales2.default.Index);
router.patch('/:id', _loginRequired2.default, _salesPermission2.default, _Sales2.default.Update);

exports. default = router;
