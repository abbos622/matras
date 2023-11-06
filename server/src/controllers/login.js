const model = require("../models/login");
const { sign } = require("../lib/jwt");

exports.loginAdmin = async (req, res) => {
    const admin = await model.login(req.body);
    if(admin) {
        const token = sign(admin);
        res.status(200)
            .json({ token, message: "You logged in!" });
    } else {
        res.status(404)
            .json({ message: "You are not logged in, please try again!" });
    };
};