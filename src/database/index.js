// eslint-disable-next-line import/no-extraneous-dependencies
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Input from '../models/Input';
import Output from '../models/Output';
import Employee from '../models/Employee';
import Log from '../models/Log';

const models = [Input, Output, Employee, Log];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
// Verifica se existe o método associate antes de executar e depois executa todos os models
models.forEach((model) => model.associate && model.associate(connection.models));
