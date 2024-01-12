const prisma = require('../db').prisma;

const createUser = async (req, res) => {
    try {
      const { firstname, lastname, email, password} = req.body;

      const user = await prisma.users.create({
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password
        },      
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

const getAllUsers = async (req, res) => {
    try {
      const users = await prisma.users.findMany();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

const deleteUser = async (req, res) => {
  try {
    const  id  = +req.params.id
    const deleted = await prisma.users.delete({
      where: {
        id
      },
    })
    if (deleted) {
      return res.status(204).json({"msg": "User deleted"});
    }
    throw new Error("Note not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser
}
