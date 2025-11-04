"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Advice = require('../models/Advice'); var _Advice2 = _interopRequireDefault(_Advice);
var _Employee = require('../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _Input = require('../models/Input'); var _Input2 = _interopRequireDefault(_Input);
<<<<<<< HEAD
var _InputHistory = require('../models/InputHistory'); var _InputHistory2 = _interopRequireDefault(_InputHistory);
=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
var _Log = require('../models/Log'); var _Log2 = _interopRequireDefault(_Log);
var _Output = require('../models/Output'); var _Output2 = _interopRequireDefault(_Output);
var _Sale = require('../models/Sale'); var _Sale2 = _interopRequireDefault(_Sale);

<<<<<<< HEAD
const models = [_Input2.default, _Output2.default, _Employee2.default, _Log2.default, _Sale2.default, _Advice2.default, _InputHistory2.default];
=======
const models = [_Input2.default, _Output2.default, _Employee2.default, _Log2.default, _Sale2.default, _Advice2.default];
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
// Verifica se existe o método associate antes de executar e depois executa todos os models
models.forEach((model) => model.associate && model.associate(connection.models));
