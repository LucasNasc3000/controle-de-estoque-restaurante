function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const _app = require('./app');

const _app2 = _interopRequireDefault(_app);
require('./database');

_app2.default.listen(3333);

console.log('Acesso na porta http://localhost:3333');
