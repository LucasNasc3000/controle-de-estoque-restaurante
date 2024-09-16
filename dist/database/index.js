"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Input = require('../models/Input'); var _Input2 = _interopRequireDefault(_Input);
var _Output = require('../models/Output'); var _Output2 = _interopRequireDefault(_Output);
var _Employee = require('../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _Log = require('../models/Log'); var _Log2 = _interopRequireDefault(_Log);
var _Sale = require('../models/Sale'); var _Sale2 = _interopRequireDefault(_Sale);

const models = [_Input2.default, _Output2.default, _Employee2.default, _Log2.default, _Sale2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
// Verifica se existe o método associate antes de executar e depois executa todos os models
models.forEach((model) => model.associate && model.associate(connection.models));
