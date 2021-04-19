'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserPromos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: 'actions_unique',
      },
      advertisementId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: 'actions_unique',
      },
      promoName: {
        type: Sequelize.STRING
      },
      discountType: {
        type: Sequelize.STRING
      },
      minPurchase: {
        type: Sequelize.INTEGER
      },
      maxPurchase: {
        type: Sequelize.INTEGER
      },
      discountPricePerAds: {
        type: Sequelize.DOUBLE
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
      uniqueKeys: {
        actions_unique: {
          fields: ['userId', 'advertisementId']
        }
      }
    });
    await queryInterface.addConstraint('UserPromos', {
      fields: ['userId'],
      type: 'foreign key',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade'
    });
    await queryInterface.addConstraint('UserPromos', {
      fields: ['advertisementId'],
      type: 'foreign key',
      references: { //Required field
        table: 'Advertisements',
        field: 'id'
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserPromos');
  }
};