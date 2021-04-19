const userController = require('../controller/userController');

module.exports = function (fastify, opts, done){

    fastify.get('/users' , userController.getUsers)
    
    done()
}