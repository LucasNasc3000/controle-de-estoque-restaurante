"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Sale extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {
        type: _sequelize2.default.DataTypes.UUIDV1,
        defaultValue: _sequelize2.default.DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
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
      client_name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'O nome do cliente não deve ultrapassar os 100 caracteres',
          },
        },
      },
      phone_number: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 100],
            msg: 'O numero de telefone não deve ter entre 8 e 100 caracteres',
          },
        },
      },
      address: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      products: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
      },
      employee_id: {
        type: _sequelize2.default.UUIDV1,
        defaultValue: _sequelize2.default.UUIDV1,
      },
      client_birthday: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      price: {
        type: _sequelize2.default.DECIMAL(10, 2),
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Employee, { foreignKey: 'employee_id' });
  }
} exports.default = Sale;
