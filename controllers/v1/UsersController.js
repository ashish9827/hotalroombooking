const { UsersService } = require('../../services/index');
class UsersController {
    async allUsers(req, res, next) {
        try {
            await UsersService.allUsers(req, res, next);
        }
        catch (err) {
            res.send({
                "message": "Users Controller Error"
            })
        }
    }

    //login
    async login(req, res, next) {
        try {
            await UsersService.login(req, res, next);
        }
        catch (err) {
            res.send({
                "message": "Internal server error"
            })
        }
    }

    async userByID(req, res, next) {
        try {
            await UsersService.userByID(req, res, next);
        }
        catch (err) {
            res.send({
                "message": "Users Controller Error"
            })
        }
    }
}

module.exports = new UsersController();