const db = require('../database/models/index')
const { response } = require('../service/response')
const Advertisement = db.sequelize.models.Advertisement;
const UserPromo =  db.sequelize.models.UserPromo;

/**
 * Retrieve advertisements with promo price whenever it exist for authenticated user .
 * No proper authentication are implemented for now . 
 */
exports.getAllAdvertisements = async (req,res) => {
    try {

        const userId = req.params.userId;
      
        const data = await Advertisement.findAll({include:{
            model:UserPromo,
            where:{userId:userId},
            required:false,
            as:'userPromo'
        }});

        return response(res,200,"Successfully retrieved advertisemet list",data)
    }
    catch(err){
        throw err;
    }
}