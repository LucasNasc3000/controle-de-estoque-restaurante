"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class InputHistory extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      category: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'O nome da categoria não deve ultrapassar os 100 caracteres',
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
      reason: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [7, 50],
            msg: 'O motivo não deve ultrapassar os 50 caracteres e deve ter pelo menos 7',
          },
        },
      },
      quantity: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'quantidade precisa ser um número inteiro',
          },
        },
      },
      totalweight_per_register: {
        type: _sequelize2.default.DECIMAL(10, 2),
        defaultValue: '',
        validate: {
          isDecimal: {
            msg: 'peso total por registro precisa ser do tipo decimal',
          },
        },
      },
      weightperunit: {
        type: _sequelize2.default.DECIMAL(10, 2),
        defaultValue: '',
        validate: {
          isDecimal: {
            msg: 'peso unitário precisa ser do tipo decimal',
          },
        },
      },
      price: {
        type: _sequelize2.default.DECIMAL(10, 2),
        defaultValue: '',
      },
      totalprice: {
        type: _sequelize2.default.DECIMAL(10, 2),
        defaultValue: '',
      },
      supplier: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 150],
            msg: 'O nome do fornecedor não deve ultrapassar os 150 caracteres',
          },
        },
      },
      expirationdate: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 20],
            msg: 'A data não deve ultrapassar os 20 caracteres e deve ter pelo menos 6',
          },
        },
      },
      employee_id: {
        type: _sequelize2.default.UUIDV1,
        defaultValue: _sequelize2.default.UUIDV1,
      },
      minimun_quantity: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'quantidade mínima precisa ser um número inteiro',
          },
        },
      },
      rateisnear: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'a quantidade próxima ao limite precisa ser um número inteiro',
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
} exports.default = InputHistory;
