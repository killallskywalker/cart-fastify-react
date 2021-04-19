'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPromo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserPromo.init({
    userId: DataTypes.INTEGER,
    promoName: DataTypes.STRING,
    discountType: DataTypes.STRING,
    minPurchase: DataTypes.INTEGER,
    maxPurchase: DataTypes.INTEGER,
    discountPricePerAds:DataTypes.DOUBLE,
    advertisementId:DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'UserPromo',
    defaultScope: {
      attributes: { exclude: ['createdAt','updatedAt'] 
    }}
  });
  return UserPromo;
};