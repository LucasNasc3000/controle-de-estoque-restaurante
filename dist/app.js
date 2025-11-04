"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

// eslint-disable-next-line import/no-extraneous-dependencies
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
<<<<<<< HEAD
=======
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _errorHandler = require('./middlewares/errorHandler'); var _errorHandler2 = _interopRequireDefault(_errorHandler);
var _swagger_outputjson = require('./swagger_output.json'); var _swagger_outputjson2 = _interopRequireDefault(_swagger_outputjson);

// input routes
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
<<<<<<< HEAD
var _inputSearchByCategory = require('./routes/input/inputSearchByCategory'); var _inputSearchByCategory2 = _interopRequireDefault(_inputSearchByCategory);
=======
var _input = require('./routes/input/input'); var _input2 = _interopRequireDefault(_input);
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
var _inputSearchByEmployeeId = require('./routes/input/inputSearchByEmployeeId'); var _inputSearchByEmployeeId2 = _interopRequireDefault(_inputSearchByEmployeeId);
var _inputSearchByExpirationDate = require('./routes/input/inputSearchByExpirationDate'); var _inputSearchByExpirationDate2 = _interopRequireDefault(_inputSearchByExpirationDate);
var _inputSearchById = require('./routes/input/inputSearchById'); var _inputSearchById2 = _interopRequireDefault(_inputSearchById);
var _inputSearchByMinimunQuantity = require('./routes/input/inputSearchByMinimunQuantity'); var _inputSearchByMinimunQuantity2 = _interopRequireDefault(_inputSearchByMinimunQuantity);
var _inputSearchByName = require('./routes/input/inputSearchByName'); var _inputSearchByName2 = _interopRequireDefault(_inputSearchByName);
<<<<<<< HEAD
var _inputSearchByPrice = require('./routes/input/inputSearchByPrice'); var _inputSearchByPrice2 = _interopRequireDefault(_inputSearchByPrice);
var _inputSearchByQuantity = require('./routes/input/inputSearchByQuantity'); var _inputSearchByQuantity2 = _interopRequireDefault(_inputSearchByQuantity);
var _inputSearchBySupplier = require('./routes/input/inputSearchBySupplier'); var _inputSearchBySupplier2 = _interopRequireDefault(_inputSearchBySupplier);
var _inputSearchByTotalWeight = require('./routes/input/inputSearchByTotalWeight'); var _inputSearchByTotalWeight2 = _interopRequireDefault(_inputSearchByTotalWeight);
var _inputSearchByWeightPerUnit = require('./routes/input/inputSearchByWeightPerUnit'); var _inputSearchByWeightPerUnit2 = _interopRequireDefault(_inputSearchByWeightPerUnit);

// input history routes
var _input = require('./routes/inputHistory/input'); var _input2 = _interopRequireDefault(_input);
var _inputSearchByCategory3 = require('./routes/inputHistory/inputSearchByCategory'); var _inputSearchByCategory4 = _interopRequireDefault(_inputSearchByCategory3);
var _inputSearchByEmployeeId3 = require('./routes/inputHistory/inputSearchByEmployeeId'); var _inputSearchByEmployeeId4 = _interopRequireDefault(_inputSearchByEmployeeId3);
var _inputSearchByExpirationDate3 = require('./routes/inputHistory/inputSearchByExpirationDate'); var _inputSearchByExpirationDate4 = _interopRequireDefault(_inputSearchByExpirationDate3);
var _inputSearchById3 = require('./routes/inputHistory/inputSearchById'); var _inputSearchById4 = _interopRequireDefault(_inputSearchById3);
var _inputSearchByMinimunQuantity3 = require('./routes/inputHistory/inputSearchByMinimunQuantity'); var _inputSearchByMinimunQuantity4 = _interopRequireDefault(_inputSearchByMinimunQuantity3);
var _inputSearchByName3 = require('./routes/inputHistory/inputSearchByName'); var _inputSearchByName4 = _interopRequireDefault(_inputSearchByName3);
var _inputSearchByPrice3 = require('./routes/inputHistory/inputSearchByPrice'); var _inputSearchByPrice4 = _interopRequireDefault(_inputSearchByPrice3);
var _inputSearchByQuantity3 = require('./routes/inputHistory/inputSearchByQuantity'); var _inputSearchByQuantity4 = _interopRequireDefault(_inputSearchByQuantity3);
var _inputSearchByReason = require('./routes/inputHistory/inputSearchByReason'); var _inputSearchByReason2 = _interopRequireDefault(_inputSearchByReason);
var _inputSearchBySupplier3 = require('./routes/inputHistory/inputSearchBySupplier'); var _inputSearchBySupplier4 = _interopRequireDefault(_inputSearchBySupplier3);
var _inputSearchByTotalPrice = require('./routes/inputHistory/inputSearchByTotalPrice'); var _inputSearchByTotalPrice2 = _interopRequireDefault(_inputSearchByTotalPrice);
var _inputSearchByTotalWeightPerRegister = require('./routes/inputHistory/inputSearchByTotalWeightPerRegister'); var _inputSearchByTotalWeightPerRegister2 = _interopRequireDefault(_inputSearchByTotalWeightPerRegister);
var _inputSearchByWeightPerUnit3 = require('./routes/inputHistory/inputSearchByWeightPerUnit'); var _inputSearchByWeightPerUnit4 = _interopRequireDefault(_inputSearchByWeightPerUnit3);

// auth routes
// import mfaUser from './routes/mfa/preMfaUser';
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
// import tokenUser from './routes/tokenUser';
=======
var _inputSearchByQuantity = require('./routes/input/inputSearchByQuantity'); var _inputSearchByQuantity2 = _interopRequireDefault(_inputSearchByQuantity);
var _inputSearchBySupplier = require('./routes/input/inputSearchBySupplier'); var _inputSearchBySupplier2 = _interopRequireDefault(_inputSearchBySupplier);
var _inputSearchByTotalWeight = require('./routes/input/inputSearchByTotalWeight'); var _inputSearchByTotalWeight2 = _interopRequireDefault(_inputSearchByTotalWeight);
var _inputSearchByType = require('./routes/input/inputSearchByType'); var _inputSearchByType2 = _interopRequireDefault(_inputSearchByType);
var _inputSearchByWeightPerUnit = require('./routes/input/inputSearchByWeightPerUnit'); var _inputSearchByWeightPerUnit2 = _interopRequireDefault(_inputSearchByWeightPerUnit);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9

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
<<<<<<< HEAD
var _employeeSearchByPermission = require('./routes/employee/employeeSearchByPermission'); var _employeeSearchByPermission2 = _interopRequireDefault(_employeeSearchByPermission);
=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
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
var _saleSearchPrice = require('./routes/sales/saleSearchPrice'); var _saleSearchPrice2 = _interopRequireDefault(_saleSearchPrice);
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
<<<<<<< HEAD
=======
    this.app.use(_helmet2.default.call(void 0, ));
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
  }

  routes() {
    this.app.use('/', _home2.default);

    // input routes
    this.app.use('/doc', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(_swagger_outputjson2.default));

    this.app.use('/tokens/', _token2.default);
    // this.app.use('/usertokens/', tokenUser);
    this.app.use('/inputs/search/id/', _inputSearchById2.default);
    this.app.use('/inputs/search/category/', _inputSearchByCategory2.default);
    this.app.use('/inputs/search/name/', _inputSearchByName2.default);
    this.app.use('/inputs/search/quantity/', _inputSearchByQuantity2.default);
    this.app.use('/inputs/search/minimunquantity/', _inputSearchByMinimunQuantity2.default);
    this.app.use('/inputs/search/totalweight/', _inputSearchByTotalWeight2.default);
    this.app.use('/inputs/search/weightperunit/', _inputSearchByWeightPerUnit2.default);
    this.app.use('/inputs/search/supplier/', _inputSearchBySupplier2.default);
    this.app.use('/inputs/search/expirationdate/', _inputSearchByExpirationDate2.default);
    this.app.use('/inputs/search/employeeid/', _inputSearchByEmployeeId2.default);
    this.app.use('/inputs/search/price/', _inputSearchByPrice2.default);

    // input history routes
    this.app.use('/inputsHistory/', _input2.default);
    this.app.use('/inputsHistory/search/id/', _inputSearchById4.default);
    this.app.use('/inputsHistory/search/category/', _inputSearchByCategory4.default);
    this.app.use('/inputsHistory/search/name/', _inputSearchByName4.default);
    this.app.use('/inputsHistory/search/reason/', _inputSearchByReason2.default);
    this.app.use('/inputsHistory/search/quantity/', _inputSearchByQuantity4.default);
    this.app.use('/inputsHistory/search/minimunquantity/', _inputSearchByMinimunQuantity4.default);
    this.app.use('/inputsHistory/search/totalweightPerRegister/', _inputSearchByTotalWeightPerRegister2.default);
    this.app.use('/inputsHistory/search/weightperunit/', _inputSearchByWeightPerUnit4.default);
    this.app.use('/inputsHistory/search/supplier/', _inputSearchBySupplier4.default);
    this.app.use('/inputsHistory/search/expirationdate/', _inputSearchByExpirationDate4.default);
    this.app.use('/inputsHistory/search/employeeid/', _inputSearchByEmployeeId4.default);
    this.app.use('/inputsHistory/search/price/', _inputSearchByPrice4.default);
    this.app.use('/inputsHistory/search/totalprice/', _inputSearchByTotalPrice2.default);

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
<<<<<<< HEAD
    this.app.use('/employees/search/permission', _employeeSearchByPermission2.default);
=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
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
    this.app.use('/sales/search/price', _saleSearchPrice2.default);

    // advice routes
    this.app.use('/advices/', _advice2.default);
    this.app.use('/advices/search/employeeid', _adviceSearchByEmployeeId2.default);

    // advice routes
    this.app.use('/advices/', _advice2.default);
    this.app.use('/advices/search/employeeid', _adviceSearchByEmployeeId2.default);

    this.app.use(_errorHandler2.default);
  }
}

exports. default = new App().app;
