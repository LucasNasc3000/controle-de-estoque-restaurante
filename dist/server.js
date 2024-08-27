"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable import/no-extraneous-dependencies */
var _swaggerjsdoc = require('swagger-jsdoc'); var _swaggerjsdoc2 = _interopRequireDefault(_swaggerjsdoc);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);

const listenPort = process.env.APP_PORT;
const swaggerJsdoc = _swaggerjsdoc2.default.call(void 0, );
const swaggerUi = _swaggeruiexpress2.default.call(void 0, );

var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
require('./database');

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Storage Manager',
      version: '0.1.0',
      description:
        'Aplicação de controle de estoque para o ramo alimentício',
      contact: {
        name: 'Lucas Fortunato',
        url: 'perfilDolinkedInAqui',
        email: 'emailAqui',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
_app2.default.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs),
);

_app2.default.listen(listenPort);

console.log(`Acesso na porta http://localhost:${listenPort}`);
