"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
require('./database');

_app2.default.listen(3000);

console.log('Acesso na porta http://localhost:3000');
