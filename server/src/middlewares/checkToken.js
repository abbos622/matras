const { verify } = require("../lib/jwt");
const { secretKey } = require("../config/keys");
const model = require("../models/login");

exports.checkToken = async (req, res, next) => {
    const token = req.headers.authorization;
    
    if(!token) {
        res.status(401)
            .json({ message: "You are not logged in, please try again!" });
    } else {
        try {
            const payload = verify(token, secretKey);
            const admin = await model.getId();
            if(payload.id === admin.id) {
                next();
            } else {
                res.status(401)
                    .json({ message: "You are not logged in, please try again!" });
            }
        } catch(error) {
            res.status(401)
                .json({ message: "Invalid token. Please, log in again!" });
            throw error;
        };
    };
};