const { RoomsService } = require('../../services/index');
class RoomsController {
    async allRooms(req, res, next) {
        try {
            await RoomsService.allRooms(req, res, next);
        }
        catch (err) {
            res.send({
                "message": "Rooms Controller Error"
            })
        }
    }

    async bookingRooms(req, res, next) {
        try {
            await RoomsService.bookingRooms(req, res, next);
        }
        catch (err) {
            res.send({
                "message": "Rooms Controller Error"
            })
        }
    }

    async availableRooms(req, res, next) {
        try {
            await RoomsService.availableRooms(req, res, next);
        }
        catch (err) {
            res.send({
                "message": "Rooms Controller Error"
            })
        }
    }
}

module.exports = new RoomsController();