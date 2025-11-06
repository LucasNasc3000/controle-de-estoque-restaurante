import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middlewares/errorHandler';
import swaggerFile from './swagger_output.json';

// input routes
import homeRoutes from './routes/home';
import inputSearchByCategory from './routes/input/inputSearchByCategory';
import inputSearchByEmployeeId from './routes/input/inputSearchByEmployeeId';
import inputSearchByExpirationDate from './routes/input/inputSearchByExpirationDate';
import inputSearchByID from './routes/input/inputSearchById';
import inputSearchByMinimunQuantity from './routes/input/inputSearchByMinimunQuantity';
import inputSearchByName from './routes/input/inputSearchByName';
import inputSearchByPrice from './routes/input/inputSearchByPrice';
import inputSearchByQuantity from './routes/input/inputSearchByQuantity';
import inputSearchBySupplier from './routes/input/inputSearchBySupplier';
import inputSearchByTotalWeight from './routes/input/inputSearchByTotalWeight';
import inputSearchByWeightPerUnit from './routes/input/inputSearchByWeightPerUnit';

// input history routes
import inputHistory from './routes/inputHistory/input';
import inputHistorySearchByCategory from './routes/inputHistory/inputSearchByCategory';
import inputHistorySearchByEmployeeId from './routes/inputHistory/inputSearchByEmployeeId';
import inputHistorySearchByExpirationDate from './routes/inputHistory/inputSearchByExpirationDate';
import inputHistorySearchByID from './routes/inputHistory/inputSearchById';
import inputHistorySearchByMinimunQuantity from './routes/inputHistory/inputSearchByMinimunQuantity';
import inputHistorySearchByName from './routes/inputHistory/inputSearchByName';
import inputHistorySearchByPrice from './routes/inputHistory/inputSearchByPrice';
import inputHistorySearchByQuantity from './routes/inputHistory/inputSearchByQuantity';
import inputHistorySearchByReason from './routes/inputHistory/inputSearchByReason';
import inputHistorySearchBySupplier from './routes/inputHistory/inputSearchBySupplier';
import inputHistorySearchByTotalPrice from './routes/inputHistory/inputSearchByTotalPrice';
import inputHistorySearchByTotalWeightPerRegister from './routes/inputHistory/inputSearchByTotalWeightPerRegister';
import inputHistorySearchByWeightPerUnit from './routes/inputHistory/inputSearchByWeightPerUnit';

// auth routes
// import mfaUser from './routes/mfa/preMfaUser';
import tokenSuperAdmin from './routes/token';
// import tokenUser from './routes/tokenUser';

// output routes
import outputRoutes from './routes/output/output';
import outputSearchByDate from './routes/output/outputSearchByDate';
import outputSearchByEmployeeId from './routes/output/outputSearchByEmployeeId';
import outputSearchByHour from './routes/output/outputSearchByHour';
import outputSearchByID from './routes/output/outputSearchById';
import outputSearchByName from './routes/output/outputSearchByName';
import outputSearchByType from './routes/output/outputSearchByType';
import outputSearchByUnities from './routes/output/outputSearchByUnities';

// employee routes
import employeeRoutes from './routes/employee/employee';
import employeeSearchByBoss from './routes/employee/employeeSearchByBoss';
import employeeSearchByEmail from './routes/employee/employeeSearchByEmail';
import employeeSearchByID from './routes/employee/employeeSearchById';
import employeeSearchByName from './routes/employee/employeeSearchByName';
import employeeSearchByPermission from './routes/employee/employeeSearchByPermission';
import employeeSearchOneByName from './routes/employee/employeeSearchOneByName';
import exEmployeeSearch from './routes/employee/exEmployeeSearch';

// sales routes
import salesRoutes from './routes/sales/sale';
import saleSearchAddress from './routes/sales/saleSearchAddress';
import saleSearchClientName from './routes/sales/saleSearchClientName';
import saleSearchDate from './routes/sales/saleSearchDate';
import saleSearchEmployeeId from './routes/sales/saleSearchEmployeeId';
import saleSearchHour from './routes/sales/saleSearchHour';
import saleSearchId from './routes/sales/saleSearchId';
import saleSearchPhoneNumber from './routes/sales/saleSearchPhoneNumber';
import saleSearchPrice from './routes/sales/saleSearchPrice';
import saleSearchProducts from './routes/sales/saleSearchProducts';

// notices routes
import adviceRoutes from './routes/advice/advice';
import adviceSearchEmployeeId from './routes/advice/adviceSearchByEmployeeId';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  /*
   O correto e recomendado é escrever em um array os endereços ip ou domínios que podem ter
   acesso à API (configuração do cors), essas configurações não estão aqui no entanto devido
   a um erro que não consegui solucionar e que impedia o uso desta API pela aplicação web.
   */
  middlewares() {
    this.app.use(cors({
      origin: '*',
    }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);

    // input routes
    this.app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    this.app.use('/tokens/', tokenSuperAdmin);
    // this.app.use('/usertokens/', tokenUser);
    this.app.use('/inputs/search/id/', inputSearchByID);
    this.app.use('/inputs/search/category/', inputSearchByCategory);
    this.app.use('/inputs/search/name/', inputSearchByName);
    this.app.use('/inputs/search/quantity/', inputSearchByQuantity);
    this.app.use('/inputs/search/minimunquantity/', inputSearchByMinimunQuantity);
    this.app.use('/inputs/search/totalweight/', inputSearchByTotalWeight);
    this.app.use('/inputs/search/weightperunit/', inputSearchByWeightPerUnit);
    this.app.use('/inputs/search/supplier/', inputSearchBySupplier);
    this.app.use('/inputs/search/expirationdate/', inputSearchByExpirationDate);
    this.app.use('/inputs/search/employeeid/', inputSearchByEmployeeId);
    this.app.use('/inputs/search/price/', inputSearchByPrice);

    // input history routes
    this.app.use('/inputsHistory/', inputHistory);
    this.app.use('/inputsHistory/search/id/', inputHistorySearchByID);
    this.app.use('/inputsHistory/search/category/', inputHistorySearchByCategory);
    this.app.use('/inputsHistory/search/name/', inputHistorySearchByName);
    this.app.use('/inputsHistory/search/reason/', inputHistorySearchByReason);
    this.app.use('/inputsHistory/search/quantity/', inputHistorySearchByQuantity);
    this.app.use('/inputsHistory/search/minimunquantity/', inputHistorySearchByMinimunQuantity);
    this.app.use('/inputsHistory/search/totalweightPerRegister/', inputHistorySearchByTotalWeightPerRegister);
    this.app.use('/inputsHistory/search/weightperunit/', inputHistorySearchByWeightPerUnit);
    this.app.use('/inputsHistory/search/supplier/', inputHistorySearchBySupplier);
    this.app.use('/inputsHistory/search/expirationdate/', inputHistorySearchByExpirationDate);
    this.app.use('/inputsHistory/search/employeeid/', inputHistorySearchByEmployeeId);
    this.app.use('/inputsHistory/search/price/', inputHistorySearchByPrice);
    this.app.use('/inputsHistory/search/totalprice/', inputHistorySearchByTotalPrice);

    // output routes
    this.app.use('/outputs/', outputRoutes);
    this.app.use('/outputs/search/id/', outputSearchByID);
    this.app.use('/outputs/search/type/', outputSearchByType);
    this.app.use('/outputs/search/name/', outputSearchByName);
    this.app.use('/outputs/search/date/', outputSearchByDate);
    this.app.use('/outputs/search/hour/', outputSearchByHour);
    this.app.use('/outputs/search/unities/', outputSearchByUnities);
    this.app.use('/outputs/search/employeeid/', outputSearchByEmployeeId);

    // employee routes
    this.app.use('/employees/', employeeRoutes);
    this.app.use('/employees/search/id', employeeSearchByID);
    this.app.use('/employees/search/name', employeeSearchByName);
    this.app.use('/employees/search/permission', employeeSearchByPermission);
    this.app.use('/employees/search/uniquename', employeeSearchOneByName);
    this.app.use('/employees/search/email', employeeSearchByEmail);
    this.app.use('/employees/search/boss', employeeSearchByBoss);
    this.app.use('/exemployees/', exEmployeeSearch);

    // sales routes
    this.app.use('/sales/', salesRoutes);
    this.app.use('/sales/search/address/', saleSearchAddress);
    this.app.use('/sales/search/clientname/', saleSearchClientName);
    this.app.use('/sales/search/date/', saleSearchDate);
    this.app.use('/sales/search/employeeid/', saleSearchEmployeeId);
    this.app.use('/sales/search/hour/', saleSearchHour);
    this.app.use('/sales/search/id/', saleSearchId);
    this.app.use('/sales/search/phonenumber/', saleSearchPhoneNumber);
    this.app.use('/sales/search/products/', saleSearchProducts);
    this.app.use('/sales/search/price', saleSearchPrice);

    // advice routes
    this.app.use('/advices/', adviceRoutes);
    this.app.use('/advices/search/employeeid', adviceSearchEmployeeId);

    this.app.use(errorHandler);
  }
}

export default new App().app;
