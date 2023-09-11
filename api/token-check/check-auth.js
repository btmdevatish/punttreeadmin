const jwt = require('jsonwebtoken')

module.exports = (req,res,next) =>{
   try{
    const token = req.headers.authorization
    const decoded = jwt.verify(token, process.env.JWT_AUTH_KEY)
    req.userData = decoded
    next()
   }
   catch{
    res.status(401).json({
        message: "Session expired",
      });
   }
}