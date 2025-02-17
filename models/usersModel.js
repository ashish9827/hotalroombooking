const Sequelize = require('sequelize');
const sequelize = require('../database/database')

module.exports = sequelize.define(
  'users',
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
    password: {
      type: Sequelize.STRING
    },
    otp: {
      type: Sequelize.INTEGER
    },
    profile_image: {
      type: Sequelize.STRING
    },
    refresh_token: {
      type: Sequelize.TEXT
    },
    device_id: {
      type: Sequelize.STRING
    },
    fcm_token: {
      type: Sequelize.STRING
    },
    is_email_verified: {
      type: Sequelize.TINYINT
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