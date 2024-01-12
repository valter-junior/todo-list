const prisma = require('../db').prisma;
const jwt = require("jsonwebtoken");

const accessTokenUsers = process.env.TOKEN_SECRET

const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try{
      const usermail  = await prisma.users.findUnique({
        where: {
            email: email
        }
      })

      if(email === usermail.email) {
        if (password === usermail.password) {
          const token = jwt.sign({ email: email, password: password }, accessTokenUsers);
          res.json({token});
        } else {
          res.json("Email or password invalid")
        }
      } 
    } catch(error) {
      return res.status(500).json("Email or password invalid");
    }
    
}

module.exports = {
    loginUser
}
  