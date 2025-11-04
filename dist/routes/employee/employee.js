"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Employee = require('../../controllers/Employee/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _adminPermission = require('../../middlewares/adminPermission'); var _adminPermission2 = _interopRequireDefault(_adminPermission);
var _loginRequired = require('../../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

<<<<<<< HEAD
router.post('/', _loginRequired2.default, _adminPermission2.default, _Employee2.default.Store);
=======
router.post('/', _Employee2.default.Store);
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
router.put('/:id', _loginRequired2.default, _adminPermission2.default, _Employee2.default.Update);

exports. default = router;
