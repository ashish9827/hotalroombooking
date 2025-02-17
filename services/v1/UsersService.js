const auth = require('../../middleware/auth');
const usersModel = require('../../models/usersModel');
const Op = require('sequelize').Op
class UsersService {
    // login
    async login(req, res, next) {
        try {
            const result = await usersModel.findOne({
                raw: true, where: {
                    [Op.or]: [{
                        email: {
                            [Op.eq]: req.body.username
                        },
                    },
                    {
                        user_id: {
                            [Op.eq]: req.body.username
                        }
                    }]
                }
            });
            let token = await auth.createAccessToken({ user_id: result.user_id });
            console.log(result, token);
            if (token) {
                // const result = await Users.findAll({ raw: true });
                res.status(200).send({
                    "message": "Users",
                    "access_token": token,
                    "data": result
                })
            }
        }
        catch (err) {
            console.log("User error", err);
            res.send({
                "message": err
            })
        }
    }

    async allUsers(req, res, next) {
        try {
            // const result = await UserModel.findOne({raw: true, where: {id: 2}});
            const result = await usersModel.findAll({ raw: true });
            res.send({
                "message": "Users",
                "data": result
            })
        }
        catch (err) {
            console.log("User error", err);
            res.send({
                "message": "Users Service Error"
            })
        }
    }

    async userByID(req, res, next) {
        try {
            // const result = await UserModel.findOne({raw: true, where: {id: 2}});
            let user_id = await auth.getID(req, res, next);
            const result = await usersModel.findAll({ raw: true, where: { user_id: user_id } });
            res.send({
                "message": "User",
                "data": result
            });
        }
        catch (err) {
            console.log("User error", err);
            res.send({
                "message": "Users Service Error"
            })
        }
    }
}

module.exports = new UsersService();