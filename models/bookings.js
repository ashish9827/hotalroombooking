'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bookings.init({
    id: DataTypes.BIGINT,
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    room_number: DataTypes.INTEGER,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    booked_status: DataTypes.STRING,
    description: DataTypes.STRING,
    is_deleted: DataTypes.TINYINT,
    status: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'bookings',
  });
  return bookings;
};