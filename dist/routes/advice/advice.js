"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Advice = require('../../controllers/Advice/Advice'); var _Advice2 = _interopRequireDefault(_Advice);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _salesPermission = require('../../middlewares/salesPermission'); var _salesPermission2 = _interopRequireDefault(_salesPermission);

const router = new (0, _express.Router)();

router.get('/', _loginRequired2.default, _salesPermission2.default, _Advice2.default.Recovery);
router.post('/', _loginRequired2.default, _salesPermission2.default, _Advice2.default.Store);
router.patch('/:id', _loginRequired2.default, _salesPermission2.default, _Advice2.default.Update);
router.delete('/:id', _loginRequired2.default, _salesPermission2.default, _Advice2.default.Delete);

exports. default = router;
