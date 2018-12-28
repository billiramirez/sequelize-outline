const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'password123', {
    dialect: 'mysql',
    host: 'localhost'
}); //instancing

module.exports = sequelize;