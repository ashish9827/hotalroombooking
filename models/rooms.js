'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rooms.init({
    id: DataTypes.BIGINT,
    room_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    is_deleted: DataTypes.TINYINT,
    status: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'rooms',
  });
  return rooms;
};