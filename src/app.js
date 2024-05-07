import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import homeRoutes from './routes/home';
import inputRoutes from './routes/input';

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
  }
}

export default new App().app;
