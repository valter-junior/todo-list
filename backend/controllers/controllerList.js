const prisma = require('../db').prisma;

const createList = async (req, res) => {
  try {
    const { userid, title, description} = req.body
    const list = await prisma.list.create({
      data: {
        userid,
        title,
        description,
      }
    });
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllLists = async (req, res) => {
  try {
    
    const lists = await prisma.list.findMany()
    
    return res.status(200).json(lists);
        
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateLists = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description} = req.body
    const  updated  = await prisma.list.update({
      where: { id: Number(id) },
      data: {
        title,
        description
      }
    });
    
    return res.status(200).json(updated);
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteLists = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.list.delete({
      where: { id: Number(id) }
    });
    if (deleted) {
      return res.status(204).json({"msg": "List deleted"});
    }
    throw new Error("Note not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createList,
  getAllLists,
  updateLists,
  deleteLists
}
