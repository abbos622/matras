const model = require("../models/orders");
const { pageLimit } = require("../config/keys");

exports.getData = async (req, res) => {   
    let { count } = await model.getCount();
    count = Math.ceil(count / pageLimit);

    if(req.params.page == 0 || req.params.page > count) {
        res.status(400)
            .json({ message: "Bad request" })
    }

    let page = (req.params.page - 1) * pageLimit;
    const data = await model.getOrders(pageLimit, page);
    if(data) {
        res.status(200)
            .send({ data, count });
    } else {
        res.status(401)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.insertData = async (req, res) => {
    const data = await model.insertOrders(req.body);
    if(data) {
        res.status(201)
            .json({ message: "Order successfully added!", id: data.id });
    } else {
        res.status(400)
            .json({ message: "Bad request, please try again!" });
    };
};

exports.updateData = async (req, res) => {
    const data = await model.updateOrders(req.params.id);
    if(data) {
        res.status(200)
            .json({ message: "Order successfully updated", id: data.id });
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.searchData = async (req, res) => {
    const found = await model.searchOrder(req.query.search);
    if(found) {
        res.status(200)
            .json(found)
    } else {
        res.status(404)
            .json({ message: "Not Found, please try again!" })
    };
};