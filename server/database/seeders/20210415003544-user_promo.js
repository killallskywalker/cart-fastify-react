'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserPromos' , [
      {
        userId:2,
        discountType:"free_item",
        advertisementId:1,
        promoName:"Gets a “3 for 2” deal on Standard Ads",
        minPurchase:2,
        maxPurchase:null,
        discountPricePerAds:269.99, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:3,
        discountType:"special_price",
        advertisementId:2,
        promoName:"Gets a discount on Featured Ads where the price drops to 299.99 RM per ad",
        minPurchase:0,
        maxPurchase:null,
        discountPricePerAds:299.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:4,
        discountType:"discount_per_item",
        advertisementId:3,
        promoName:"Gets a discount on Premium Ads where 4 or more are purchased. The price drops to 379.99 RM per ad",
        minPurchase:4,
        maxPurchase:null,
        discountPricePerAds:379.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:5,
        discountType:"free_item",
        advertisementId:1,
        promoName:"Gets a “5 for 4” deal on Standard Ads",
        minPurchase:4,
        maxPurchase:null,
        discountPricePerAds:269.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:5,
        discountType:"special_price",
        advertisementId:2,
        promoName:"Gets a discount on Featured Ads where the price drops to 309.99 RM per ad",
        minPurchase:0,
        maxPurchase:null,
        discountPricePerAds:309.99, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:5,
        discountType:"discount_per_item",
        advertisementId:3,
        promoName:"Gets a discount on Premium Ads when 3 or more are purchased. The price drops to 389.99 RM per ad",
        minPurchase:3,
        maxPurchase:null,
        discountPricePerAds:389.99, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
