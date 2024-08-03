const express = require('express');
const userController = require('../Controllers/User.controller.js');

const router = express.Router();

router.post('/create', userController.createUser);
router.get('/get-users', userController.getAllUsers);

module.exports = router;