const express = require('express');
const router = express.Router();

const rooms = require('./v1/rooms');
const users = require('./v1/users');

router.use('/rooms', rooms);
router.use('/users', users);

module.exports = router;