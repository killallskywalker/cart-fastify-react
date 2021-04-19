exports.response = (res,status,message,data) => {
    res
   .code(status)
   .header('Content-Type', 'application/json; charset=utf-8')
   .send({
       "message":message,
       "data":data
   })
}