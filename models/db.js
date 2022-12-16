//Sequelize instance implementation
const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.NAME_BDD, process.env.USERNAME_BDD, process.env.MDP_BDD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: true,
});

async function getConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}

getConnection();

module.exports = sequelize;