import Sequelize from 'sequelize'; // Sequelize conecta-se ao banco
import mongoose from 'mongoose';

import User from '../models/User';

import databaseConfig from '../../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // Método que carrega os models e se conecta à base de dados

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mogoConnection = mongoose.connect(
      'mongodb://localhost:27017/gobarber',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }
}

export default new Database();
