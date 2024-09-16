"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Home = require('../controllers/Home'); var _Home2 = _interopRequireDefault(_Home); // O home controller não é importado aqui com maiúsculo para não ser importado como objeto da classe em vez da classe em si, porque a classe já tem o 'h' maiúsculo

const router = new (0, _express.Router)();

router.get('/', _Home2.default.index);

exports. default = router;
