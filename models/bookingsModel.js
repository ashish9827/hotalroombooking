const Sequelize = require('sequelize');
const sequelize = require('../database/database')

module.exports = sequelize.define(
  'bookings',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    room_number: {
      type: Sequelize.INTEGER
    },
    from: {
      type: Sequelize.DATE
    },
    to: {
      type: Sequelize.DATE
    },
    booked_status: {
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