const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();
const sequelize = new Sequelize('hotel', 'root', 'ashish1234', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
global.sequelize = sequelize;