module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'panel-backend',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }
};
