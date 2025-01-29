// eslint-disable-next-line import/no-extraneous-dependencies
import Sequelize, { Model } from 'sequelize';

export default class Sale extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.DataTypes.UUIDV1,
        defaultValue: Sequelize.DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 20],
            msg: 'A data não deve ultrapassar os 20 caracteres e deve ter pelo menos 6',
          },
        },
      },
      hour: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 10],
            msg: 'A hora não deve ultrapassar os 10 caracteres e deve ter pelo menos 4',
          },
        },
      },
      client_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'O nome do cliente não deve ultrapassar os 100 caracteres',
          },
        },
      },
      phone_number: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 100],
            msg: 'O numero de telefone não deve ter entre 8 e 100 caracteres',
          },
        },
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      products: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      employee_id: {
        type: Sequelize.UUIDV1,
        defaultValue: Sequelize.UUIDV1,
      },
      client_birthday: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Employee, { foreignKey: 'employee_id' });
    this.hasMany(models.Notice, { foreignKey: 'sale_id' });
  }
}
