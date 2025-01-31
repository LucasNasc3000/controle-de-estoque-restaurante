// eslint-disable-next-line import/no-extraneous-dependencies
import Sequelize, { Model } from 'sequelize';
// eslint-disable-next-line import/no-extraneous-dependencies
import bcryptjs from 'bcryptjs';

export default class Employee extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.DataTypes.UUIDV1,
        defaultValue: Sequelize.DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existente',
        },
        validate: {
          isEmail: {
            args: [3, 255],
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      adminpassword_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 60],
            msg: 'A senha precisa ter entre 8 e 60 caracteres',
          },
        },
      },
      adminpassword: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 60],
            msg: 'A senha do admin precisa ter entre 8 e 60 caracteres',
          },
        },
      },
      permission: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 20],
            msg: 'A permissao deve ter entre 8 e 20 caracteres',
          },
        },
      },
      address_allowed: {
        type: Sequelize.CHAR,
        defaultValue: '',
      },
      boss: {
        type: Sequelize.DataTypes.UUIDV1,
        defaultValue: Sequelize.DataTypes.UUIDV1,
        allowNull: true,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (employee) => {
      if (employee.password) {
        employee.password_hash = await bcryptjs.hash(employee.password, 8);
      }
      if (employee.adminpassword) {
        employee.adminpassword_hash = await bcryptjs.hash(employee.adminpassword, 8);
      }
    });

    return this;
  }

  PasswordValidator(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  AdminPasswordValidator(password) {
    return bcryptjs.compare(password, this.adminpassword_hash);
  }

  static associate(models) {
    this.hasMany(models.Log, { foreignKey: 'employee_id' });
    this.hasMany(models.Input, { foreignKey: 'employee_id' });
    this.hasMany(models.Output, { foreignKey: 'employee_id' });
    this.hasMany(models.Sale, { foreignKey: 'employee_id' });
    this.hasMany(models.Notice, { foreignKey: 'employee_id' });
  }
}

// O tipo virtual faz com que um campo seja considerado apenas virtualmente, ele não vai para o BD
