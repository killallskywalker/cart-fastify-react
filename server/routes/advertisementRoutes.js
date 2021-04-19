const advertisementController = require('../controller/advertisementController')

/*
* Since ad blocker will block the advertisements contain , we use product lists as the endpoint
* to call api that return advertisement list
*/
module.exports = function (fastify, opts, done) {
    fastify.get('/products/:userId', advertisementController.getAllAdvertisements)
    done()
}