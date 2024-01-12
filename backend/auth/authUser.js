const jwt = require("jsonwebtoken");
const accessTokenUsers = process.env.TOKEN_SECRET

const authenticateUsers = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if(authHeader) {
      const token = authHeader.split(' ')[1];
      console.log(token)
      jwt.verify(token, accessTokenUsers , (err, users) => {
        console.log(err)
        if(err) {
          return res.sendStatus(403);
        }
        req.users = users;
        next();
      });
    } else {
      res.sendStatus(401); 
    }
  }
  
  module.exports = {
      authenticateUsers
  }