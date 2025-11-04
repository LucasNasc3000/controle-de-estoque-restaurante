"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Advices extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      date: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 20],
            msg: 'A data não deve ultrapassar os 20 caracteres e deve ter pelo menos 6',
          },
        },
      },
      hour: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 10],
            msg: 'A hora não deve ultrapassar os 10 caracteres e deve ter pelo menos 4',
          },
        },
      },
      timer_id: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'timer id precisa ser um número inteiro',
          },
        },
      },
      employee_id: {
        type: _sequelize2.default.UUIDV1,
        defaultValue: _sequelize2.default.UUIDV1,
      },
      subject: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [10, 50],
            msg: 'O assunto não deve ultrapassar os 50 caracteres e deve ter pelo menos 10',
          },
        },
      },
      email_body: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [10, 200],
            msg: 'O corpo do email não deve ultrapassar os 200 caracteres e deve ter pelo menos 10',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Employee, { foreignKey: 'employee_id' });
  }
} exports.default = Advices;
