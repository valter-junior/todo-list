const jwt = require("jsonwebtoken");
const user = process.env.USER_MASTER
const pass = process.env.PASS_MASTER
const accesTokenUserMaster = process.env.TOKEN_MASTER_USER


const loginMaster = async (req, res) => {
    const { username, password } = req.body;
    try{
        if(username === user && password === pass) {
            const token = jwt.sign({ username: username }, accesTokenUserMaster);
        
            res.json({ token });
        
          } else {
            res.json({"msg": "unauthorized"});

        } 

    } catch (error) {
        return res.json("Error")
    }   
}

module.exports = {
    loginMaster
}
