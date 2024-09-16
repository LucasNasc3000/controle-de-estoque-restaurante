"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Log extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {
        type: _sequelize2.default.DataTypes.UUIDV1,
        defaultValue: _sequelize2.default.DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            args: [3, 255],
            msg: 'Email inválido',
          },
        },
      },
      date: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 255],
            msg: 'A data deve ter entre 6 e 255 caracteres',
          },
        },
      },
      time: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'O tempo deve ter entre 4 e 255 caracteres',
          },
        },
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
} exports.default = Log;
