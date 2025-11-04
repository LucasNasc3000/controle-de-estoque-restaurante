"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
// eslint-disable-next-line import/no-extraneous-dependencies
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Employee extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {
        type: _sequelize2.default.DataTypes.UUIDV1,
        defaultValue: _sequelize2.default.DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existente',
        },
        validate: {
          isEmail: {
            args: [13, 255],
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      adminpassword_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 60],
            msg: 'A senha precisa ter entre 8 e 60 caracteres',
          },
        },
      },
      adminpassword: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 60],
            msg: 'A senha do admin precisa ter entre 8 e 60 caracteres',
          },
        },
      },
      permission: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        allowNull: false,
      },
      address_allowed: {
        type: _sequelize2.default.CHAR,
        defaultValue: '',
      },
      boss: {
        type: _sequelize2.default.DataTypes.UUIDV1,
        defaultValue: _sequelize2.default.DataTypes.UUIDV1,
        allowNull: true,
      },
      is_active: {
        type: _sequelize2.default.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (employee) => {
      if (employee.password) {
        employee.password_hash = await _bcryptjs2.default.hash(employee.password, 8);
      }
      if (employee.adminpassword) {
        employee.adminpassword_hash = await _bcryptjs2.default.hash(employee.adminpassword, 8);
      }
    });

    return this;
  }

  PasswordValidator(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }

  AdminPasswordValidator(password) {
    return _bcryptjs2.default.compare(password, this.adminpassword_hash);
  }

  static associate(models) {
    this.hasMany(models.Log, { foreignKey: 'employee_id' });
    this.hasMany(models.Input, { foreignKey: 'employee_id' });
    this.hasMany(models.Output, { foreignKey: 'employee_id' });
    this.hasMany(models.Sale, { foreignKey: 'employee_id' });
    this.hasMany(models.Advices, { foreignKey: 'employee_id' });
  }
} exports.default = Employee;

// O tipo virtual faz com que um campo seja considerado apenas virtualmente, ele não vai para o BD
