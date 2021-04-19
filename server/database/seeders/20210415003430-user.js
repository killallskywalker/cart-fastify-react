'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
     await queryInterface.bulkInsert('Users' , [
      {
        email:"default@gmail.com",
        name:"Default",
        password:"123456789",
        createdAt: new Date(),
        updatedAt: new Date()
       },
      {
       email:"uem@gmail.com",
       name:"UEM Sunrise",
       password:"123456789",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       email:"sdarby@gmail.com",
       name:"Sime Darby Property Sdn Bhd",
       password:"123456789",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       email:"igb@gmail.com",
       name:"IGB Berhad",
       password:"123456789",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       email:"mah@gmail.com",
       name:"Mah Sing Group",
       password:"123456789",
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
