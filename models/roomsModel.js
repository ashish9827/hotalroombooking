const Sequelize = require('sequelize');
const sequelize = require('../database/database')

module.exports = sequelize.define(
  'rooms',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    room_id: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    is_deleted: {
      type: Sequelize.TINYINT
    },
    status: {
      type: Sequelize.TINYINT
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  },
  {
    // Other model options go here
  },
);