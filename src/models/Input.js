// eslint-disable-next-line import/no-extraneous-dependencies
import Sequelize, { Model } from 'sequelize';

export default class Input extends Model {
  static init(sequelize) {
    super.init({
      type: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'O nome do tipo não deve ultrapassar os 100 caracteres',
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
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'quantidade precisa ser um número inteiro',
          },
        },
      },
      totalweight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'peso total precisa ser um número',
          },
        },
      },
      weightperunit: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'peso por unidade precisa ser um número',
          },
        },
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
      entrydate: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [12, 20],
            msg: 'A data não deve ultrapassar os 20 caracteres e deve ter pelo menos 12',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
