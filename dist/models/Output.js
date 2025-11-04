"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Output extends _sequelize.Model {
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
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'O nome não deve ultrapassar os 100 caracteres',
          },
        },
      },
      category: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'O tipo não deve ultrapassar os 100 caracteres',
          },
        },
      },
      reason: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 50],
            msg: 'O motivo deve ter entre 5 e 50 caracteres',
          },
        },
      },
      unities: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
      },
      employee_id: {
        type: _sequelize2.default.UUIDV1,
        defaultValue: _sequelize2.default.UUIDV1,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Employee, { foreignKey: 'employee_id' });
  }
} exports.default = Output;
