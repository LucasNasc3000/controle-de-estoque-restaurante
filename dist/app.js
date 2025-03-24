"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

// eslint-disable-next-line import/no-extraneous-dependencies
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _errorHandler = require('./middlewares/errorHandler'); var _errorHandler2 = _interopRequireDefault(_errorHandler);
var _swagger_outputjson = require('./swagger_output.json'); var _swagger_outputjson2 = _interopRequireDefault(_swagger_outputjson);

// input routes
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _input = require('./routes/input/input'); var _input2 = _interopRequireDefault(_input);
var _inputSearchByEmployeeId = require('./routes/input/inputSearchByEmployeeId'); var _inputSearchByEmployeeId2 = _interopRequireDefault(_inputSearchByEmployeeId);
var _inputSearchByExpirationDate = require('./routes/input/inputSearchByExpirationDate'); var _inputSearchByExpirationDate2 = _interopRequireDefault(_inputSearchByExpirationDate);
var _inputSearchById = require('./routes/input/inputSearchById'); var _inputSearchById2 = _interopRequireDefault(_inputSearchById);
var _inputSearchByMinimunQuantity = require('./routes/input/inputSearchByMinimunQuantity'); var _inputSearchByMinimunQuantity2 = _interopRequireDefault(_inputSearchByMinimunQuantity);
var _inputSearchByName = require('./routes/input/inputSearchByName'); var _inputSearchByName2 = _interopRequireDefault(_inputSearchByName);
var _inputSearchByQuantity = require('./routes/input/inputSearchByQuantity'); var _inputSearchByQuantity2 = _interopRequireDefault(_inputSearchByQuantity);
var _inputSearchBySupplier = require('./routes/input/inputSearchBySupplier'); var _inputSearchBySupplier2 = _interopRequireDefault(_inputSearchBySupplier);
var _inputSearchByTotalWeight = require('./routes/input/inputSearchByTotalWeight'); var _inputSearchByTotalWeight2 = _interopRequireDefault(_inputSearchByTotalWeight);
var _inputSearchByType = require('./routes/input/inputSearchByType'); var _inputSearchByType2 = _interopRequireDefault(_inputSearchByType);
var _inputSearchByWeightPerUnit = require('./routes/input/inputSearchByWeightPerUnit'); var _inputSearchByWeightPerUnit2 = _interopRequireDefault(_inputSearchByWeightPerUnit);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);

// output routes
var _output = require('./routes/output/output'); var _output2 = _interopRequireDefault(_output);
var _outputSearchByDate = require('./routes/output/outputSearchByDate'); var _outputSearchByDate2 = _interopRequireDefault(_outputSearchByDate);
var _outputSearchByEmployeeId = require('./routes/output/outputSearchByEmployeeId'); var _outputSearchByEmployeeId2 = _interopRequireDefault(_outputSearchByEmployeeId);
var _outputSearchByHour = require('./routes/output/outputSearchByHour'); var _outputSearchByHour2 = _interopRequireDefault(_outputSearchByHour);
var _outputSearchById = require('./routes/output/outputSearchById'); var _outputSearchById2 = _interopRequireDefault(_outputSearchById);
var _outputSearchByName = require('./routes/output/outputSearchByName'); var _outputSearchByName2 = _interopRequireDefault(_outputSearchByName);
var _outputSearchByType = require('./routes/output/outputSearchByType'); var _outputSearchByType2 = _interopRequireDefault(_outputSearchByType);
var _outputSearchByUnities = require('./routes/output/outputSearchByUnities'); var _outputSearchByUnities2 = _interopRequireDefault(_outputSearchByUnities);

// employee routes
var _employee = require('./routes/employee/employee'); var _employee2 = _interopRequireDefault(_employee);
var _employeeSearchByBoss = require('./routes/employee/employeeSearchByBoss'); var _employeeSearchByBoss2 = _interopRequireDefault(_employeeSearchByBoss);
var _employeeSearchByEmail = require('./routes/employee/employeeSearchByEmail'); var _employeeSearchByEmail2 = _interopRequireDefault(_employeeSearchByEmail);
var _employeeSearchById = require('./routes/employee/employeeSearchById'); var _employeeSearchById2 = _interopRequireDefault(_employeeSearchById);
var _employeeSearchByName = require('./routes/employee/employeeSearchByName'); var _employeeSearchByName2 = _interopRequireDefault(_employeeSearchByName);
var _employeeSearchOneByName = require('./routes/employee/employeeSearchOneByName'); var _employeeSearchOneByName2 = _interopRequireDefault(_employeeSearchOneByName);
var _exEmployeeSearch = require('./routes/employee/exEmployeeSearch'); var _exEmployeeSearch2 = _interopRequireDefault(_exEmployeeSearch);

// sales routes
var _sale = require('./routes/sales/sale'); var _sale2 = _interopRequireDefault(_sale);
var _saleSearchAddress = require('./routes/sales/saleSearchAddress'); var _saleSearchAddress2 = _interopRequireDefault(_saleSearchAddress);
var _saleSearchClientName = require('./routes/sales/saleSearchClientName'); var _saleSearchClientName2 = _interopRequireDefault(_saleSearchClientName);
var _saleSearchDate = require('./routes/sales/saleSearchDate'); var _saleSearchDate2 = _interopRequireDefault(_saleSearchDate);
var _saleSearchEmployeeId = require('./routes/sales/saleSearchEmployeeId'); var _saleSearchEmployeeId2 = _interopRequireDefault(_saleSearchEmployeeId);
var _saleSearchHour = require('./routes/sales/saleSearchHour'); var _saleSearchHour2 = _interopRequireDefault(_saleSearchHour);
var _saleSearchId = require('./routes/sales/saleSearchId'); var _saleSearchId2 = _interopRequireDefault(_saleSearchId);
var _saleSearchPhoneNumber = require('./routes/sales/saleSearchPhoneNumber'); var _saleSearchPhoneNumber2 = _interopRequireDefault(_saleSearchPhoneNumber);
var _saleSearchProducts = require('./routes/sales/saleSearchProducts'); var _saleSearchProducts2 = _interopRequireDefault(_saleSearchProducts);

// notices routes
var _advice = require('./routes/advice/advice'); var _advice2 = _interopRequireDefault(_advice);
var _adviceSearchByEmployeeId = require('./routes/advice/adviceSearchByEmployeeId'); var _adviceSearchByEmployeeId2 = _interopRequireDefault(_adviceSearchByEmployeeId);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  /*
   O correto e recomendado é escrever em um array os endereços ip ou domínios que podem ter
   acesso à API (configuração do cors), essas configurações não estão aqui no entanto devido
   a um erro que não consegui solucionar e que impedia o uso desta API pela aplicação web.
   */
  middlewares() {
    this.app.use(_cors2.default.call(void 0, {
      origin: '*',
    }));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
  }

  routes() {
    this.app.use('/', _home2.default);

    // input routes
    this.app.use('/doc', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(_swagger_outputjson2.default));

    this.app.use('/tokens/', _token2.default);
    this.app.use('/inputs/', _input2.default);
    this.app.use('/inputs/search/id/', _inputSearchById2.default);
    this.app.use('/inputs/search/type/', _inputSearchByType2.default);
    this.app.use('/inputs/search/name/', _inputSearchByName2.default);
    this.app.use('/inputs/search/quantity/', _inputSearchByQuantity2.default);
    this.app.use('/inputs/search/minimunquantity/', _inputSearchByMinimunQuantity2.default);
    this.app.use('/inputs/search/totalweight/', _inputSearchByTotalWeight2.default);
    this.app.use('/inputs/search/weightperunit/', _inputSearchByWeightPerUnit2.default);
    this.app.use('/inputs/search/supplier/', _inputSearchBySupplier2.default);
    this.app.use('/inputs/search/expirationdate/', _inputSearchByExpirationDate2.default);
    this.app.use('/inputs/search/employeeid/', _inputSearchByEmployeeId2.default);

    // output routes
    this.app.use('/outputs/', _output2.default);
    this.app.use('/outputs/search/id/', _outputSearchById2.default);
    this.app.use('/outputs/search/type/', _outputSearchByType2.default);
    this.app.use('/outputs/search/name/', _outputSearchByName2.default);
    this.app.use('/outputs/search/date/', _outputSearchByDate2.default);
    this.app.use('/outputs/search/hour/', _outputSearchByHour2.default);
    this.app.use('/outputs/search/unities/', _outputSearchByUnities2.default);
    this.app.use('/outputs/search/employeeid/', _outputSearchByEmployeeId2.default);

    // employee routes
    this.app.use('/employees/', _employee2.default);
    this.app.use('/employees/search/id', _employeeSearchById2.default);
    this.app.use('/employees/search/name', _employeeSearchByName2.default);
    this.app.use('/employees/search/uniquename', _employeeSearchOneByName2.default);
    this.app.use('/employees/search/email', _employeeSearchByEmail2.default);
    this.app.use('/employees/search/boss', _employeeSearchByBoss2.default);
    this.app.use('/exemployees/', _exEmployeeSearch2.default);

    // sales routes
    this.app.use('/sales/', _sale2.default);
    this.app.use('/sales/search/address/', _saleSearchAddress2.default);
    this.app.use('/sales/search/clientname/', _saleSearchClientName2.default);
    this.app.use('/sales/search/date/', _saleSearchDate2.default);
    this.app.use('/sales/search/employeeid/', _saleSearchEmployeeId2.default);
    this.app.use('/sales/search/hour/', _saleSearchHour2.default);
    this.app.use('/sales/search/id/', _saleSearchId2.default);
    this.app.use('/sales/search/phonenumber/', _saleSearchPhoneNumber2.default);
    this.app.use('/sales/search/products/', _saleSearchProducts2.default);

    // advice routes
    this.app.use('/advices/', _advice2.default);
    this.app.use('/advices/search/employeeid', _adviceSearchByEmployeeId2.default);

    this.app.use(_errorHandler2.default);
  }
}

exports. default = new App().app;
