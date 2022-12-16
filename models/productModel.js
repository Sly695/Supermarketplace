const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');


const Product = sequelize.define('Product', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    quantity: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },


}, {
    timestamps:true
});

(async () => {
    sequelize.sync();
})();


  


module.exports = Product;
