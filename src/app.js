import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import homeRoutes from './routes/home';
import inputRoutes from './routes/input';
import inputSearchByID from './routes/inputSearchById';
import inputSearchByType from './routes/inputSearchByType';
import inputSearchByName from './routes/inputSearchByName';
import inputSearchByQuantity from './routes/inputSearchByQuantity';
import inputSearchByTotalWeight from './routes/inputSearchByTotalWeight';
import inputSearchByWeightPerUnit from './routes/inputSearchByWeightPerUnit';
import inputSearchBySupplier from './routes/inputSearchBySupplier';
import inputSearchByEntryDate from './routes/inputSearchByEntryDate';
import inputSearchByExpirationDate from './routes/inputSearchByExpirationDate';

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
  }
}

export default new App().app;
