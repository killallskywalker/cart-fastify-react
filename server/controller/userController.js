const db = require('../database/models/index')
const User = db.sequelize.models.User
const { response } = require('../service/response')

/**
 * Retrieve all user for demo purpose to stimulate each different user
 */
exports.getUsers = async (req,res) => {
    try {
        const users = await User.findAll();
        
        return response(res,200,"Successfully retrieve all users",users)
    }
    catch(err){
        throw err;
    }
}