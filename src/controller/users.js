const UsersModels = require('../models/users');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModels.getAllUsers();
    res.status(200).json({
      message: 'GET all users success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.email || !body.address) {
    return res.status(400).json({
      message: 'you are sending wrong data',
      data: 'null',
    });
  }

  try {
    await UsersModels.createNewUsers(body);
    res.status(201).json({
      message: 'CREATE new users success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await UsersModels.updateUsers(body, id);
    res.json({
      message: 'UPDATE user success',
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModels.deleteUser(id);
    res.status(200).json({
      message: 'DELETE user succes',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
};
