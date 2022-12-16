const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');


const User = sequelize.define('Users', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
  },


}, {
    timestamps: false,
});

(async () => {
    sequelize.sync();
})();


module.exports = User;