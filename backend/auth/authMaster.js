const jwt = require("jsonwebtoken");
const accesTokenUserMaster = process.env.TOKEN_MASTER_USER

const authenticateUserMaster = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if(authHeader) {
      const token = authHeader.split(' ')[1];
      console.log(token)
      jwt.verify(token, accesTokenUserMaster, (err, user) => {
        console.log(err)
        if(err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401); 
    }
  }

  
  module.exports ={
      authenticateUserMaster
  }