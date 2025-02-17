const RoomsModel = require('../../models/RoomsModel');
const bookingsModel = require('../../models/bookingsModel');
const usersModel = require('../../models/usersModel');
const auth = require('../../middleware/auth');
const Op = require('sequelize').Op
const current_datetime = require("date-and-time");
class RoomsService {
    async allRooms(req, res, next) {
        try {
            // const result = await feedModel.findOne({raw: true, where: {id: 2}});
            const result = await RoomsModel.findAll({ raw: true });
            let user_id = await auth.getID(req, res, next);
            console.log("ip-", req.connection.remote);
            res.send({
                "id": user_id,
                "message": "Rooms",
                "data": result
            })
        }
        catch (err) {
            res.send({
                "message": err
            })
        }
    }

    async bookingRooms(req, res, next) {
        try {
            // {
            //     "user_id": "user2",//
            //     "name": "user bhai",//
            //     "email": "userbhai2@gmail.com",//
            //     "room_number": 101, // room_id
            //     "from": "2025-03-02 00:00:00",
            //     "to": "2025-03-03  00:00:00",
            //     "booked_status": "booked",//
            //     "description": "parking required for one car"
            // }
            // const result = await feedModel.findOne({raw: true, where: {id: 2}});
            const bookedHistory = await bookingsModel.findAll({
                raw: true, where: {
                    from: {
                        [Op.eq]: new Date(new Date(req.body.from).getTime() + 1000 * 60 * ((60 * 5) + 30))
                    },
                    to: {
                        [Op.eq]: new Date(new Date(req.body.to).getTime() + 1000 * 60 * ((60 * 5) + 30))
                    },
                    room_number: req.body.room_number
                }
            });
            console.log("bookingRooms", bookedHistory);
            let user_id = await auth.getID(req, res, next);
            console.log("ip-", req.connection.remote, user_id);
            if (bookedHistory.length == 0) {
                const now = new Date()
                const getUser = await usersModel.findAll({
                    raw: true, where: {
                        user_id: user_id
                    }
                });
                let addBooking = new bookingsModel({
                    id: 1,
                    user_id: user_id,
                    name: getUser[0].name,
                    email: getUser[0].email,
                    room_number: req.body.room_number,
                    from: new Date(new Date(req.body.from).getTime() + 1000 * 60 * ((60 * 5) + 30)),
                    to: new Date(new Date(req.body.to).getTime() + 1000 * 60 * ((60 * 5) + 30)),
                    description: req.body.description,
                    booked_status: "booked",
                    status: 1,
                    is_deleted: 0,
                    createdAt: current_datetime.format(now, 'YYYY-MM-DD HH:mm:ss'),
                    updatedAt: current_datetime.format(now, 'YYYY-MM-DD HH:mm:ss')
                });
                addBooking.save().then(function (saveData) {
                    res.status(200).send({
                        "message": "room booked",
                    })
                }).catch(function (err) {
                    res.status(200).send({
                        "message": "booking failed",
                    })
                });
            } else {
                res.status(400).send({
                    "message": "for this date no booking available",
                })
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send({
                "message": err
            })
        }
    }

    async availableRooms(req, res, next) {
        try {
            const bookedHistory = await bookingsModel.findAll({
                raw: true, where: {
                    from: {
                        [Op.eq]: new Date(new Date(req.body.from).getTime() + 1000 * 60 * ((60 * 5) + 30))
                    },
                    to: {
                        [Op.eq]: new Date(new Date(req.body.to).getTime() + 1000 * 60 * ((60 * 5) + 30))
                    }
                }
            });
            let user_id = await auth.getID(req, res, next);
            console.log("ip-", req.connection.remote);
            console.log("bookingRooms", bookedHistory);
            const rooms = await RoomsModel.findAll({ raw: true });
            if (bookedHistory.length == 0) {
                res.status(200).send({
                    "message": "rooms available",
                    "rooms": rooms
                });
            }
            else if (bookedHistory.length == rooms.length) {
                res.status(400).send({
                    "message": " no rooms available",
                    "rooms": []
                });
            } else {
                let tempRoomId = [];
                let partialBooking = [];
                bookedHistory.map(res => tempRoomId.push(res.room_number));
                tempRoomId.map(res => { partialBooking.push(rooms.filter(res2 => res2.room_id != res)) })
                res.status(200).send({
                    "message": "limited rooms available",
                    "rooms": partialBooking
                });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send({
                "message": err
            })
        }
    }
}

module.exports = new RoomsService();