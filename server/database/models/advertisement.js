'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Advertisement.hasOne(models.UserPromo , { 
        as: 'userPromo',
        foreignKey: 'advertisementId' 
      });
    }
  };
  Advertisement.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, 
  {
    sequelize,
    modelName: 'Advertisement',
    defaultScope: {
      attributes: { exclude: ['createdAt','updatedAt'] 
    }}
  });
  return Advertisement;
};