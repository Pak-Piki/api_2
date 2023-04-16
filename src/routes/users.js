const express = require('express');

const userController = require('../controller/users');

const router = express.Router();

//CREATE - POST
router.post('/', userController.createNewUsers);

// READ - GET
router.get('/', userController.getAllUsers);

// UPDATE - PUT
router.put('/:id', userController.updateUser);

// DELETE - DELETE
router.delete('/:id', userController.deleteUser);

module.exports = router;
