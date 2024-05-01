import app from './app';
import './database';

const listenPort = process.env.APP_PORT;

app.listen(listenPort);

console.log(`Acesso na porta http://localhost:${listenPort}`);
