'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    otp: DataTypes.INTEGER,
    profile_image: DataTypes.STRING,
    refresh_token: DataTypes.TEXT,
    device_id: DataTypes.STRING,
    fcm_token: DataTypes.STRING,
    is_email_verified: DataTypes.TINYINT,
    is_deleted: DataTypes.TINYINT,
    status: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};