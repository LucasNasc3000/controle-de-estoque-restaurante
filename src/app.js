import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
//input routes

// Arquivo de logs --> gerar csv e guardar registros em uma tabela no bd
// Registro das atividades
import homeRoutes from './routes/home';
import tokenRoutes from './routes/token';
import inputRoutes from './routes/input/input';
import inputSearchByID from './routes/input/inputSearchById';
import inputSearchByType from './routes/input/inputSearchByType';
import inputSearchByName from './routes/input/inputSearchByName';
import inputSearchByQuantity from './routes/input/inputSearchByQuantity';
import inputSearchByTotalWeight from './routes/input/inputSearchByTotalWeight';
import inputSearchByWeightPerUnit from './routes/input/inputSearchByWeightPerUnit';
import inputSearchBySupplier from './routes/input/inputSearchBySupplier';
import inputSearchByEntryDate from './routes/input/inputSearchByEntryDate';
import inputSearchByExpirationDate from './routes/input/inputSearchByExpirationDate';

// output routes
import outputRoutes from './routes/output/output';
import outputSearchByID from './routes/output/outputSearchById';
import outputSearchByType from './routes/output/outputSearchByType';
import outputSearchByName from './routes/output/outputSearchByName';
import outputSearchByDate from './routes/output/outputSearchByDate';
import outputSearchByHour from './routes/output/outputSearchByHour';
import outputSearchByUnities from './routes/output/outputSearchByUnities';
import outputSearchByWeight from './routes/output/outputSearchByWeight';

// user routes
import userRoutes from './routes/user/user'
import userSearchByID from './routes/user/userSearchById';
import userSearchByName from './routes/user/userSearchByName';
import userSearchByEmail from './routes/user/userSearchByEmail';

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
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/inputs/', inputRoutes);
    this.app.use('/inputs/search/id/', inputSearchByID);
    this.app.use('/inputs/search/type/', inputSearchByType);
    this.app.use('/inputs/search/name/', inputSearchByName);
    this.app.use('/inputs/search/quantity/', inputSearchByQuantity);
    this.app.use('/inputs/search/totalweight/', inputSearchByTotalWeight);
    this.app.use('/inputs/search/weightperunit/', inputSearchByWeightPerUnit);
    this.app.use('/inputs/search/supplier/', inputSearchBySupplier);
    this.app.use('/inputs/search/entrydate/', inputSearchByEntryDate);
    this.app.use('/inputs/search/expirationdate/', inputSearchByExpirationDate);

    // output routes
    this.app.use('/outputs/', outputRoutes);
    this.app.use('/outputs/search/id/', outputSearchByID);
    this.app.use('/outputs/search/type/', outputSearchByType);
    this.app.use('/outputs/search/name/', outputSearchByName);
    this.app.use('/outputs/search/date/', outputSearchByDate);
    this.app.use('/outputs/search/hour/', outputSearchByHour);
    this.app.use('/outputs/search/unities/', outputSearchByUnities);
    this.app.use('/outputs/search/weight/', outputSearchByWeight);

    // user routes
    this.app.use('/users/', userRoutes);
    this.app.use('/users/search/id', userSearchByID);
    this.app.use('/users/search/name', userSearchByName);
    this.app.use('/users/search/email', userSearchByEmail);
  }
}

export default new App().app;
