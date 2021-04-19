'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Advertisements' , [
      {
        name:"Standard Ad",
        price:269.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Featured Ad",
        price:322.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Premium Ad",
        price:394.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
