// eslint-disable-next-line import/no-extraneous-dependencies
import Sequelize, { Model } from 'sequelize';

export default class Log extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.DataTypes.UUIDV1,
        defaultValue: Sequelize.DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            args: [3, 255],
            msg: 'Email inválido',
          },
        },
      },
      date: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 255],
            msg: 'A data deve ter entre 6 e 255 caracteres',
          },
        },
      },
      time: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'O tempo deve ter entre 4 e 255 caracteres',
          },
        },
      },
      employee_id: {
        type: Sequelize.UUIDV1,
        defaultValue: Sequelize.UUIDV1,
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
