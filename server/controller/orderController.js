const db = require('../database/models/index')
const { calculate } = require('killallskywalker-mycart')
const Advertisement = db.sequelize.models.Advertisement
const UserPromo =  db.sequelize.models.UserPromo
const { response } = require('../service/response')

/**
 * Process cart from client side . User authentication mock by simple passing user id only .
 */
exports.createOrder = async (req,res) => {
    try {
        const userId = req.body.userId;

        // retrieve advertisement / product type with promo that belong to user
        // if theres no any promo , only product will be return
        const userPromo = await Advertisement.findAll({include:{
            model:UserPromo,
            where:{userId:userId},
            required:false,
            as:'userPromo'
        }});
        
        const totalPrice =  calculate(userPromo,req.body);

        if(totalPrice == req.body.totalPrice)
            return response(res,200,"Successfully paid!",{status:"Success" , total:totalPrice  })

        return response(res,400,"Payment failed!",{status:"Fail" , total:totalPrice , correctTotal:totalPrice })
    }
    catch(err){
        throw err;
    }
}