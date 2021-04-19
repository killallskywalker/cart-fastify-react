const orderController = require('../controller/orderController');
const { bodyJsonSchema } = require('./../request/orderSchema')

module.exports = function (fastify, opts, done){

    const schema = {
        body: bodyJsonSchema,
    }
      
    fastify.post('/orders', { schema }  ,orderController.createOrder)
    
    done()
}