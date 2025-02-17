const jwt = require('jsonwebtoken');
let key = 'ashish1234';
let createAccessToken = async (payload) => {
    return jwt.sign(payload, key, { expiresIn: '60m' });
}
let validateAccessToken = async (req, res, next) => {
    try {
        let token = jwt.verify(req.headers.authorization.split(" ")[1], key);
        next();
    }
    catch (err) {
        res.status(502).send({
            "message": err
        })
    }
}
let getID = async (req, res, next) => {
    try {
        let token = jwt.verify(req.headers.authorization.split(" ")[1], key);
        console.log(token)
        return token.user_id;
    }
    catch (err) {
        res.status(502).send({
            "message": err
        })
    }
}

module.exports = {
    createAccessToken,
    validateAccessToken,
    getID
}