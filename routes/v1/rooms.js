const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const { RoomsController } = require('../../controllers/index');


router.post('/all-rooms', auth.validateAccessToken, RoomsController.allRooms)
router.post('/booking-rooms', auth.validateAccessToken, RoomsController.bookingRooms)
router.post('/available-rooms', auth.validateAccessToken, RoomsController.availableRooms)


module.exports = router

