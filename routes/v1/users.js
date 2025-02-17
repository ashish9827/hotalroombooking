const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const { UsersController } = require('../../controllers/index');
router.post('/all-users', auth.validateAccessToken, UsersController.allUsers)
router.get('/user-by-id', auth.validateAccessToken, UsersController.userByID)
router.post('/login', UsersController.login)


module.exports = router