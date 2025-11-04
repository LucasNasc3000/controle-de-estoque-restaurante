// eslint-disable-next-line import/no-extraneous-dependencies
import Sequelize, { Model } from 'sequelize';

export default class InputHistory extends Model {
  static init(sequelize) {
    super.init({
      category: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'O nome da categoria não deve ultrapassar os 100 caracteres',
          },
        },
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'O nome não deve ultrapassar os 100 caracteres',
          },
        },
      },
      reason: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [7, 50],
            msg: 'O motivo não deve ultrapassar os 50 caracteres e deve ter pelo menos 7',
          },
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'quantidade precisa ser um número inteiro',
          },
        },
      },
      totalweight_per_register: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: '',
        validate: {
          isDecimal: {
            msg: 'peso total por registro precisa ser do tipo decimal',
          },
        },
      },
      weightperunit: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: '',
        validate: {
          isDecimal: {
            msg: 'peso unitário precisa ser do tipo decimal',
          },
        },
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: '',
      },
      totalprice: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: '',
      },
      supplier: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 150],
            msg: 'O nome do fornecedor não deve ultrapassar os 150 caracteres',
          },
        },
      },
      expirationdate: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 20],
            msg: 'A data não deve ultrapassar os 20 caracteres e deve ter pelo menos 6',
          },
        },
      },
      employee_id: {
        type: Sequelize.UUIDV1,
        defaultValue: Sequelize.UUIDV1,
      },
      minimun_quantity: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'quantidade mínima precisa ser um número inteiro',
          },
        },
      },
      rateisnear: {
        type: Sequelize.INTEGER,
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
}
